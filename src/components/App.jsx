import Feedback from './feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Please leave feedback:
      <Feedback />
    </div>
  );
};
