import Counter from "./Counter";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h4>Please leave feedback</h4>
      <Counter></Counter>
    </div>
  );
};
