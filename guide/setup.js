import Raven from "raven-js";

const setup = () => {
    let { hostname } = window.location;

    if (hostname !== 'localhost') {
        let dsn = 'https://13620d03f39e4d54998a51e4598d5c7a@sentry.io/269077';
        Raven
            .config(dsn)
            .install();
    }

    if (!Raven.isSetup()) {
        // eslint-disable-next-line no-console
        console.info(
            '[cyverse-ui] Sentry Raven client (error reporting) is not installed');
    }
}

export { setup }
