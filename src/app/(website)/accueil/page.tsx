import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero_content">
          <h2 className="sr_only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr_only">Features</h2>
        <div className="feature_item">
          <Image
            src="/images/icon-chat.png"
            alt="Chat Icon"
            width={64}
            height={64}
            className="feature_icon"
          />
          <h3 className="feature_item_title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature_item">
          <Image
            src="/images/icon-money.png"
            alt="Chat Icon"
            width={64}
            height={64}
            className="feature_icon"
          />
          <h3 className="feature_item_title">
            More savings means higher rates
          </h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature_item">
          <Image
            src="/images/icon-security.png"
            alt="Chat Icon"
            width={64}
            height={64}
            className="feature_icon"
          />
          <h3 className="feature_item_title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  );
}
