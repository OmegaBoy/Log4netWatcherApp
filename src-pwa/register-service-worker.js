import { register } from "register-service-worker";
import { Notify } from "quasar";

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    // console.log('Service worker is active.')
  },

  registered(/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached(/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    // console.log('New content is downloading.')
  },

  updated(/* registration */) {
    Notify.create({
      progress: true,
      message: "Nueva version disponible, por favor recarge.",
      icon: "fas fa-cloud-download-alt",
      color: "primary",
      timeout: 30000,
      onDismiss() {
        location.reload(true);
      },
      actions: [
        {
          label: "Actualizar",
          color: "warning",
          handler: () => {
            location.reload(true);
          },
        },
      ],
    });
    // navigator.serviceWorker.getRegistrations().then(function (registrations) {
    //   for (let registration of registrations) {
    //     registration.unregister().then((_) => {
    //       window.location.reload();
    //     });
    //   }
    // });
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  },
});
