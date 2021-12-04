useEffect(() => {
  $(document).ready(function () {
    var container,
      camera,
      scene,
      renderer,
      particles,
      particle,
      SEPARATION = 40,
      AMOUNTX = 200,
      AMOUNTY = 35,
      count = 0,
      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2;
    function init() {
      container = document.createElement("div");
      document.getElementById("landing").appendChild(container);
      if (container) {
        container.className += container.className ? " waves" : "waves";
        camera = new THREE.PerspectiveCamera(
          120,
          window.innerWidth / window.innerHeight,
          1,
          1e4
        );
        camera.position.y = 300;
      }

      camera.position.z = 300;
      camera.rotation.x = 0.35;
      scene = new THREE.Scene();
      particles = new Array();
      for (
        var e = 2 * Math.PI,
          n = new THREE.SpriteMaterial({
            color: "#555",
            program: function (n) {
              n.beginPath();
              n.arc(0, 0, 0.1, 0, e, !0);
              n.fill();
            },
          }),
          i = 0,
          r = 0;
        r < AMOUNTX;
        r++
      ) {
        for (var a = 0; a < AMOUNTY; a++) {
          particles[i++] = new THREE.Sprite(n);
          particle = particles[i++];
          const party = new THREE.Sprite(n);
          party.position.x = r * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          party.position.z = a * SEPARATION - (AMOUNTY * SEPARATION - 10);
          scene.add(particle);
        }
      }

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      window.addEventListener("resize", onWindowResize, !1);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animate() {
      requestAnimationFrame(animate);
      render();
    }
    function render() {
      for (var e = 0, n = 0; n < AMOUNTX; n++) {
        for (var i = 0; i < AMOUNTY; i++) {
          const party = new THREE.Sprite(n);
          particle = party;
          particle.position.y =
            20 * Math.sin(0.5 * (n + count)) + 20 * Math.sin(0.5 * (i + count));
          //

          particle.scale.y =
            4 * (Math.sin(0.3 * (n + count)) + 2) +
            4 * (Math.sin(0.5 * (i + count)) + 1);
          particle.scale.x = particle.scale.y;
        }
      }

      renderer.render(scene, camera);
      count += 0.2;
    }
    init();
    animate();
  });
}, []);
