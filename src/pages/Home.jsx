const Home = () => {
  return (
    <div className="home-page">
      <h2>Welcome to JobScout!</h2>
      <section className="intro">
        <p>
          <span>JobScout</span> is your go-to platform for discovering your next
          career opportunity. Whether you're looking for a new job, seeking
          career advice, or wanting to explore different industries, we've got
          you covered.
        </p>
      </section>
      <section className="why-job-scout">
        <h3>Why Choose JobScout?</h3>
        <ul>
          <li>
            <strong>Comprehensive Job Listings:</strong> Explore thousands of
            job opportunities from various industries.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Get job suggestions
            based on your profile and preferences.
          </li>
          <li>
            <strong>Application Tracking:</strong> Keep track of your job
            applications and their statuses in one place.
          </li>
          <li>
            <strong>Career Resources:</strong> Access a wealth of resources to
            help you succeed in your job search.
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Home;
