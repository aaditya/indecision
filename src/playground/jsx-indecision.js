console.log("App.js is running!")

const app = {
  'title':'Indecision App',
  'subtitle':'Put your life in the hands of the computer',
  'options':[]
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    renderer();
  }
}

const wipeArray = () => {
  app.options = [];
  renderer();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
}

const appRoot = document.getElementById('app');

const renderer = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options.'}</p>
    <p>{app.options.length}</p>
    <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do ?</button>
    <button onClick={wipeArray}>Remove All</button>
    <ol>
    {
      app.options.map((o,i) => <li key={i}>{o}</li>)
    }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
}

renderer();
