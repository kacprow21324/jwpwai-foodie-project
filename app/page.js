import Link from 'next/link';
import ImageSlideshow from './components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
      <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste & share food from all over the world.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </header>
    
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food gives home cooks and pros a stage to showcase the
            dishes they love, with step-by-step guidance and photos that actually
            help you cook.
          </p>
          <p>
            Join to swap ideas with curious eaters, find quick weekday saves,
            or plan a weekend feast that makes your friends ask for seconds.
          </p>
        </section>
      </main>
    </>
  );
}
