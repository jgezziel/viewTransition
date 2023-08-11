window.navigation.addEventListener('navigate', (event) => {
    const toUrl = new URL(event.destination.url);

    if (location.origin !== toUrl.origin) return

    event.intercept({
        async handler() {
            const data = await fetchPage(toUrl.pathname)

            document.startViewTransition(() => {
                document.body.innerHTML = data
                document.documentElement.scrollTop = 0
            })
        }
    })
})