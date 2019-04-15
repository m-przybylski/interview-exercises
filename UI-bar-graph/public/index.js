function bootstrap() {
  const graph = document.getElementById('graph');
  graph.classList.add('graph-layout--loading');
  getData().then(data => draw(data, graph));
}

/**
 * fetch data from the server
 * It is slowed down to make sure loader shows on the screen.
 * @returns {Promise<number[]>}
 */
function getData() {
  return new Promise(resolve => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setTimeout(() => resolve(data.data), 500));
  });
}
/**
 * draws a chart
 * @param {number[]} data values to printed on the chart
 * @param {HTMLElement} root where all nodes should be attached
 */
function draw(data, root) {
  if (root === undefined) {
    throw new Error('invalid element property');
  }

  if (!Array.isArray(data)) {
    throw new Error('data parameter is not an array');
  }
  clearBox(root);
  root.classList.remove('graph-layout--loading');
  const pilarWrapper = document.createElement('div');
  pilarWrapper.className = 'pilar-wrapper';
  root.appendChild(pilarWrapper);
  const legend = document.createElement('div');
  legend.className = 'legend';
  root.appendChild(legend);
  const height = parseInt(window.getComputedStyle(pilarWrapper).height.split('px')[0], 10);
  normalize(data, height).forEach(value => {
    drawPilar(value, pilarWrapper);
  });
  data.forEach(value => {
    drawLegend(value, legend);
  });
}

/**
 * clear selected element from all child nodes
 * @param {HTMLElement} element div to be cleared
 */
function clearBox(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 *  normalize list of values to match container height
 * @param {number[]} data list of values to be normalized
 * @param {number} containerHeight height of the container
 * @returns {number[]}
 */
function normalize(data, containerHeight) {
  const maxValue = data.reduce((max, value) => {
    if (max > value) {
      return max;
    }
    return value;
  });
  const factor = containerHeight / maxValue;
  return data.map(value => factor * value);
}

/**
 * draw a single pilar
 * @param {number} value how high the pilar should be
 * @param {HTMLDivElement} parent parent to attach pilar
 */
function drawPilar(value, parent) {
  const pilar = document.createElement('div');
  pilar.className = 'pilar';
  pilar.style.width = '25px';
  pilar.style.height = `${value}px`;
  parent.appendChild(pilar);
}

function drawLegend(value, parent) {
  const legendValue = document.createElement('div');
  legendValue.textContent = value;
  parent.appendChild(legendValue);
}

/**
 * start application
 */
bootstrap();
