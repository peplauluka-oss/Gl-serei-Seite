/* Glasquelle — Glasbruch-Intro
   Prozedurale Spinnennetz-Fraktur: Riss zeichnet sich vom Einschlagpunkt,
   dann fliegen die Scherben aus dem Bild und geben die Botschaft frei.
   Läuft nur mit JS; bei prefers-reduced-motion bleibt die Bühne verborgen. */
(function () {
  'use strict';

  var stage = document.querySelector('.shatter-stage svg');
  var heroCopy = document.querySelector('.hero-copy');
  var replayBtn = document.querySelector('.replay-btn');
  if (!heroCopy) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canAnimate = !!stage && typeof stage.animate === 'function';
  if (reduceMotion || !canAnimate) {
    // Ohne Bühne, ohne WAAPI oder mit reduzierter Bewegung: Texte sofort zeigen
    heroCopy.classList.add('play');
    if (replayBtn) replayBtn.hidden = true;
    return;
  }

  var W = 1440, H = 810;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var running = false;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

  function buildFracture() {
    var cx = W * 0.68, cy = H * 0.42;
    var SPOKES = 15;
    var RINGS = [70, 150, 260, 400, 580, 800, 1120, 1750];

    // Winkel mit Jitter
    var angles = [];
    for (var i = 0; i < SPOKES; i++) {
      var base = (i / SPOKES) * Math.PI * 2;
      angles.push(base + rand(-0.45, 0.45) * (Math.PI / SPOKES));
    }

    // Vertex-Gitter (Spoke x Ring), an die Bühne geklemmt
    var verts = [];
    for (i = 0; i < SPOKES; i++) {
      verts[i] = [];
      for (var j = 0; j < RINGS.length; j++) {
        var r = RINGS[j] * rand(0.86, 1.14);
        var a = angles[i] + rand(-0.05, 0.05);
        verts[i][j] = {
          x: clamp(cx + Math.cos(a) * r, -40, W + 40),
          y: clamp(cy + Math.sin(a) * r, -40, H + 40)
        };
      }
    }

    var shards = [];
    function addShard(pts, ring) {
      var mx = 0, my = 0;
      pts.forEach(function (p) { mx += p.x; my += p.y; });
      mx /= pts.length; my /= pts.length;
      shards.push({ pts: pts, ring: ring, cx: mx, cy: my });
    }

    // Innere Dreiecke rund um den Einschlag
    for (i = 0; i < SPOKES; i++) {
      var n = (i + 1) % SPOKES;
      addShard([{ x: cx, y: cy }, verts[i][0], verts[n][0]], 0);
    }
    // Ring-Segmente
    for (j = 0; j < RINGS.length - 1; j++) {
      for (i = 0; i < SPOKES; i++) {
        n = (i + 1) % SPOKES;
        addShard([verts[i][j], verts[n][j], verts[n][j + 1], verts[i][j + 1]], j + 1);
      }
    }

    // Risslinien: Speichen + Ringe (nur die inneren, sichtbaren)
    var cracks = [];
    for (i = 0; i < SPOKES; i++) {
      var d = 'M' + cx.toFixed(1) + ' ' + cy.toFixed(1);
      for (j = 0; j < RINGS.length - 2; j++) d += ' L' + verts[i][j].x.toFixed(1) + ' ' + verts[i][j].y.toFixed(1);
      cracks.push(d);
    }
    for (j = 0; j < RINGS.length - 3; j++) {
      d = '';
      for (i = 0; i <= SPOKES; i++) {
        var v = verts[i % SPOKES][j];
        d += (i === 0 ? 'M' : ' L') + v.x.toFixed(1) + ' ' + v.y.toFixed(1);
      }
      cracks.push(d);
    }

    return { cx: cx, cy: cy, shards: shards, cracks: cracks };
  }

  function render(model) {
    stage.innerHTML =
      '<defs>' +
      '<linearGradient id="shard-fill" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#DCEFFB" stop-opacity="0.16"/>' +
      '<stop offset="0.55" stop-color="#9BD1F0" stop-opacity="0.07"/>' +
      '<stop offset="1" stop-color="#DCEFFB" stop-opacity="0.13"/>' +
      '</linearGradient>' +
      '</defs>';
    stage.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    stage.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    var shardEls = model.shards.map(function (s) {
      var el = document.createElementNS(SVGNS, 'polygon');
      el.setAttribute('points', s.pts.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' '));
      el.setAttribute('class', 'shard');
      stage.appendChild(el);
      return el;
    });

    var crackGroup = document.createElementNS(SVGNS, 'g');
    model.cracks.forEach(function (d) {
      var p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', d);
      p.setAttribute('class', 'crack-line');
      crackGroup.appendChild(p);
    });
    stage.appendChild(crackGroup);

    var flash = document.createElementNS(SVGNS, 'circle');
    flash.setAttribute('cx', model.cx);
    flash.setAttribute('cy', model.cy);
    flash.setAttribute('r', 14);
    flash.setAttribute('class', 'impact-flash');
    stage.appendChild(flash);

    return { shardEls: shardEls, crackGroup: crackGroup, flash: flash };
  }

  function play() {
    if (running) return;
    running = true;
    heroCopy.classList.remove('play');
    // Reflow, damit die Text-Animation erneut starten kann
    void heroCopy.offsetWidth;

    var model = buildFracture();
    var els = render(model);

    // 1) Einschlag-Blitz
    els.flash.animate(
      [{ opacity: 0, transform: 'scale(0.4)' }, { opacity: 0.9, transform: 'scale(1.6)' }, { opacity: 0, transform: 'scale(2.6)' }],
      { duration: 420, delay: 240, easing: 'ease-out', fill: 'both' }
    );

    // 2) Risse zeichnen sich
    Array.prototype.forEach.call(els.crackGroup.children, function (p, k) {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: 480, delay: 300 + k * 14, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
      );
    });
    els.crackGroup.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 300, delay: 1050, easing: 'ease-in', fill: 'forwards' }
    );

    // 3) Scherben fliegen aus dem Bild
    els.shardEls.forEach(function (el, k) {
      var s = model.shards[k];
      var dx = s.cx - model.cx, dy = s.cy - model.cy;
      var dist = Math.max(Math.hypot(dx, dy), 1);
      var ux = dx / dist, uy = dy / dist;
      var throwDist = rand(360, 760) + s.ring * 90;
      var rot = rand(-55, 55);
      el.animate(
        [
          { transform: 'translate(0px, 0px) rotate(0deg)', opacity: 1 },
          { transform: 'translate(' + (ux * throwDist * 0.55).toFixed(0) + 'px, ' + (uy * throwDist * 0.55 + 40).toFixed(0) + 'px) rotate(' + (rot * 0.6).toFixed(0) + 'deg)', opacity: 1, offset: 0.55 },
          { transform: 'translate(' + (ux * throwDist).toFixed(0) + 'px, ' + (uy * throwDist + 140).toFixed(0) + 'px) rotate(' + rot.toFixed(0) + 'deg)', opacity: 0 }
        ],
        {
          duration: rand(750, 1050),
          delay: 950 + s.ring * 55 + rand(0, 70),
          easing: 'cubic-bezier(0.5, 0, 0.85, 0.4)',
          fill: 'forwards'
        }
      );
    });

    // 4) Botschaft erscheint, während das Glas fällt
    setTimeout(function () { heroCopy.classList.add('play'); }, 1150);
    setTimeout(function () { running = false; }, 2600);
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', play);
  }

  // Autostart, sobald der Hero sichtbar ist (er ist es beim Laden)
  if (document.readyState === 'complete') {
    requestAnimationFrame(play);
  } else {
    window.addEventListener('load', function () { requestAnimationFrame(play); }, { once: true });
  }
})();
