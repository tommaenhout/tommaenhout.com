interface HomeProps {
  children: React.ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return (
    <div className="card-started" id="home-card">
      {children}
    </div>
  );
};
export default Home;
