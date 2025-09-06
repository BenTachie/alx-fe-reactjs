import UserProfile from './components/UserProfile';


function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Benedict" 
        age="26" 
        bio="Aspiring data scientist & software developer passionate about AI and digital transformation" 
      />
    </div>
  );
}

export default App;

