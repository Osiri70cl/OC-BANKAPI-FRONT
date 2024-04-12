export default function User() {
  return (
    <main className="main bg_dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit_button">Edit Name</button>
      </div>
      <h2 className="sr_only">Accounts</h2>
      <section className="account">
        <div className="account_content_wrapper">
          <h3 className="account_title">Argent Bank Checking (x8349)</h3>
          <p className="account_amount">$2,082.79</p>
          <p className="account_amount_description">Available Balance</p>
        </div>
        <div className="account_content_wrapper cta">
          <button className="transaction_button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account_content_wrapper">
          <h3 className="account_title">Argent Bank Savings (x6712)</h3>
          <p className="account_amount">$10,928.42</p>
          <p className="account_amount_description">Available Balance</p>
        </div>
        <div className="account_content_wrapper cta">
          <button className="transaction_button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account_content_wrapper">
          <h3 className="account_title">Argent Bank Credit Card (x8349)</h3>
          <p className="account_amount">$184.30</p>
          <p className="account_amount_description">Current Balance</p>
        </div>
        <div className="account_content_wrapper cta">
          <button className="transaction_button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
