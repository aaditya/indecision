console.log('To-Do Project is running !')

const app = {
  'title':'Visibility Toggle',
  'subtitle':'Hey. These are some details you can now see!',
  'toggle':false
}

const toggle = () => {
  app.toggle = !app.toggle;
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggle}>{app.toggle?'Hide Details':'Show Details'}</button>
      {app.toggle && <p>{app.subtitle}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();
