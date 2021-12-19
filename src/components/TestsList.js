export default function TestsList({ testClass }) {
  return (
    <>
      <h2>{testClass.category}</h2>
      {testClass.tests.map((test) => (
        <li key={test.id} onClick={() => window.open(test.link, '_blank')}>
          {test.semester} - {test.subject}
        </li>
      ))}
    </>
  );
}
