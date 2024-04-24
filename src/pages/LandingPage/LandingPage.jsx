import './_landingPage.scss';
import FeatureArray from '../../data/featuresArray.json';
import FeatureItem from '../../components/FeatureItem/FeatureItem';

export default function LandingPage() {
  return (
    <main>
      <div className='hero'>
        <section className='hero-content'>
          <h2 className='sr-only'>Promoted Content</h2>
          <p className='subtitle'>No fees.</p>
          <p className='subtitle'>No minimum deposit.</p>
          <p className='subtitle'>High interest rates.</p>
          <p className='text'>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className='features'>
        <h2 className='sr-only'>Features</h2>
        {FeatureArray.map((evt, id) => (
          <FeatureItem
            key={id}
            src={evt.src}
            alt={evt.alt}
            title={evt.Title}
            text={evt.Text}
          />
        ))}
      </section>
    </main>
  );
}
