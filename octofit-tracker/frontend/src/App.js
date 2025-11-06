import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';


function App() {
  return (
    <>
      <nav className="navbar mb-4" style={{ background: '#22223b', borderRadius: '12px', padding: '0 32px', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/octofitapp-small.png" alt="Octofit Logo" className="App-logo" style={{ height: '60px', marginRight: '16px' }} />
          <span style={{ color: '#4f8cff', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px' }}>Octofit Tracker</span>
        </Link>
        <div style={{ flex: 1 }} />
        <div>
          <Link className="App-link" to="/activities">Activities</Link>
          <Link className="App-link" to="/leaderboard">Leaderboard</Link>
          <Link className="App-link" to="/teams">Teams</Link>
          <Link className="App-link" to="/users">Users</Link>
          <Link className="App-link" to="/workouts">Workouts</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card text-center" style={{ background: '#f1f5f9', borderRadius: '16px', boxShadow: '0 2px 8px rgba(79,140,255,0.08)', padding: '32px', marginTop: '32px' }}>
              <div className="card-header" style={{ background: 'linear-gradient(90deg, #4f8cff 0%, #6ee7b7 100%)', color: '#fff', borderRadius: '12px', marginBottom: '24px' }}>
                <h2 className="card-title" style={{ color: '#fff', fontWeight: '700', letterSpacing: '1px' }}>Welcome to Octofit Tracker!</h2>
              </div>
              <div className="card-body">
                <p className="card-text" style={{ color: '#22223b', fontSize: '1.2rem' }}>Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions!</p>
                <Link to="/activities" className="btn btn-primary m-2">View Activities</Link>
                <Link to="/leaderboard" className="btn btn-success m-2">Leaderboard</Link>
                <Link to="/teams" className="btn btn-info m-2">Teams</Link>
                <Link to="/users" className="btn btn-warning m-2">Users</Link>
                <Link to="/workouts" className="btn btn-danger m-2">Workouts</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
