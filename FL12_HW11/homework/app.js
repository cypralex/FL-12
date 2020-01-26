const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createTree(arr, rootNode){
	let ul = document.createElement('ul');
	arr.forEach( arg => {
		let li = document.createElement('li');
		li.append(arg.title);
		ul.append(li);
		if(arg.folder){
			if (arg.children) {
				createTree(arg.children, ul);
			}else {
				let emptyFolder = document.createElement('ul');
				emptyFolder.append('folder is empty');
				li.append(emptyFolder);
			}
		}		
	});
	console.log(ul);
	rootNode.append(ul);
}
function mouseOver(){
	let elem = this.querySelector('li:hover');
    elem.classList.add('mouseover');	
}
function mouseOut(){
	let elements = this.querySelectorAll('li');
	for (let elem of elements) {
    elem.classList.remove('mouseover');
  }
}
function openClose(){
	let elements = this.querySelectorAll('li:hover > ul, li:hover + ul');
	for (let elem of elements) {
    elem.classList.toggle('openClose');
    elem.innerHtml = 'folder';
  }  
}

rootNode.addEventListener('mouseover', mouseOver);
rootNode.addEventListener('mouseout', mouseOut);
rootNode.addEventListener('click', openClose);



createTree(structure, rootNode);
console.log(rootNode);