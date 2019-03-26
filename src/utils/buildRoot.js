export default () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.append(div);

  return div;
  
}