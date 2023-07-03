import classes from "./index.module.css";

export default function TopLogo() {
    return (
        <section className={classes.headerSec}>
            <img src="/logo.svg" alt="logo" className={classes.headerLogo} />
        </section>
    );
}