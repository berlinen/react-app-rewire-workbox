const isLocalhost: boolean = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
)

export default function register (): void {
  if('serviceWorker' in navigator) {
     // The URL constructor is available in all browsers that support SW.
    const publicUrl: URL = new URL(process.env.PUBLIC_URL, window.location.origin);
    if(publicUrl.origin !== window.location.origin) return
  }

  window.addEventListener('load', () => {
    const swUrl: string = `${process.env.PUBLIC_URL}/custom-service-worker.js`;
    if(isLocalhost) {
       // 本地 检查serviceworker是否存在
      checkValidServiceWorker(swUrl);
      navigator.serviceWorker.ready.then(() => {
        console.log(
          'This web app is being served cache-first by a service ' +
            'worker. To learn more, visit https://goo.gl/SC7cgQ'
        );
      })
    } else {
       // 非本地环境
       registerValidSW(swUrl);
    }
  })
}

function checkValidServiceWorker(swUrl: string) {
  fetch(swUrl)
    .then((response: any) => {
      // 检查是否可以找到serviceWorker。 如果无法重新加载页面。
      if(
        response.status === 404 ||
       !response.headers.get('content-type').includes('javascript')
      ) {
        //  找不到serviceWorker。 可能是其他应用程序。 重新加载页面。
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          })
        })
      } else {
        // 存在serviceWorker 照常进行
        registerValidSW(swUrl);
      }
    }).catch(error => {
      console.log('No internet connection found. App is running in offline mode.')
    })
}

function registerValidSW (swUrl: string) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registrtion: any) => {
      registrtion.onupdatefound = () => {
        const installingWorker = registrtion.installing
        installingWorker.onstatechange = () => {
          if(installingWorker.state === 'installed') {
            if(navigator.serviceWorker.controller) {
              //此时，旧内容将被清除，
              //新鲜的内容将被添加到缓存中。
              //现在是展示“新内容是
              //可用； 请刷新。”消息在您的网络应用中。
              console.log('New content is available; please refresh.');
            } else {
              //至此，所有内容均已预缓存。
              //现在是展示广告的最佳时机
              //“内容被缓存以供离线使用。” 信息。
              console.log('Content is cached for offline use.');
            }
          }
        }
      }
    }).catch((error) => {
      console.error('Error during service worker registration:', error);
    })
}

export function unregister () {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}