var t='...................................................................................................................................................................................................................................................................................................................................#.......#......#......########...########...#.......#...............................................#.......#.....#.#.....#.......#..#.......#...#.....#................................................#########....#...#....#.......#..#.......#....#...#.................................................#.......#...#######...########...########......#.#..................................................#.......#..#.......#..#..........#..............#...................................................#.......#..#.......#..#..........#..............#.........................................................................................................................................................................................................................................................................................................................................#.......#......#......#..........#...........#######...#.......#..########...########...#.......#...#.......#.....#.#.....#..........#..........#.......#..#.......#..#..........#..........##......#...#########....#...#....#..........#..........#.......#..#.......#..######.....######.....#.#.....#...#.......#...#######...#..........#..........#.......#..#...#...#..#..........#..........#..#....#...#.......#..#.......#..#.......#..#.......#..#.......#...#.#.#.#...#..........#..........#...#...#...#.......#..#.......#..#########..#########...#######.....#...#....########...########...#....#..#.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................#.......#......#......########...########...#.......#...............................................#.......#.....#.#.....#.......#..#.......#...#.....#................................................#########....#...#....#.......#..#.......#....#...#.................................................#.......#...#######...########...########......#.#..................................................#.......#..#.......#..#..........#..............#...................................................#.......#..#.......#..#..........#..............#.........................................................................................................................................................................................................................................................................................................................................#.......#......#......#..........#...........#######...#.......#..########...########...#.......#...#.......#.....#.#.....#..........#..........#.......#..#.......#..#..........#..........##......#...#########....#...#....#..........#..........#.......#..#.......#..######.....######.....#.#.....#...#.......#...#######...#..........#..........#.......#..#...#...#..#..........#..........#..#....#...#.......#..#.......#..#.......#..#.......#..#.......#...#.#.#.#...#..........#..........#...#...#...#.......#..#.......#..#########..#########...#######.....#...#....########...########...#....#..#.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................#.......#......#......########...########...#.......#...............................................#.......#.....#.#.....#.......#..#.......#...#.....#................................................#########....#...#....#.......#..#.......#....#...#.................................................#.......#...#######...########...########......#.#..................................................#.......#..#.......#..#..........#..............#...................................................#.......#..#.......#..#..........#..............#.........................................................................................................................................................................................................................................................................................................................................#.......#......#......#..........#...........#######...#.......#..########...########...#.......#...#.......#.....#.#.....#..........#..........#.......#..#.......#..#..........#..........##......#...#########....#...#....#..........#..........#.......#..#.......#..######.....######.....#.#.....#...#.......#...#######...#..........#..........#.......#..#...#...#..#..........#..........#..#....#...#.......#..#.......#..#.......#..#.......#..#.......#...#.#.#.#...#..........#..........#...#...#...#.......#..#.......#..#########..#########...#######.....#...#....########...########...#....#..#.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................#.......#......#......########...########...#.......#...............................................#.......#.....#.#.....#.......#..#.......#...#.....#................................................#########....#...#....#.......#..#.......#....#...#.................................................#.......#...#######...########...########......#.#..................................................#.......#..#.......#..#..........#..............#...................................................#.......#..#.......#..#..........#..............#.........................................................................................................................................................................................................................................................................................................................................#.......#......#......#..........#...........#######...#.......#..########...########...#.......#...#.......#.....#.#.....#..........#..........#.......#..#.......#..#..........#..........##......#...#########....#...#....#..........#..........#.......#..#.......#..######.....######.....#.#.....#...#.......#...#######...#..........#..........#.......#..#...#...#..#..........#..........#..#....#...#.......#..#.......#..#.......#..#.......#..#.......#...#.#.#.#...#..........#..........#...#...#...#.......#..#.......#..#########..#########...#######.....#...#....########...########...#....#..#.............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................#.......#......#......########...########...#.......#...............................................#.......#.....#.#.....#.......#..#.......#...#.....#................................................#########....#...#....#.......#..#.......#....#...#.................................................#.......#...#######...########...########......#.#..................................................#.......#..#.......#..#..........#..............#...................................................#.......#..#.......#..#..........#..............#.........................................................................................................................................................................................................................................................................................................................................#.......#......#......#..........#...........#######...#.......#..########...########...#.......#...#.......#.....#.#.....#..........#..........#.......#..#.......#..#..........#..........##......#...#########....#...#....#..........#..........#.......#..#.......#..######.....######.....#.#.....#...#.......#...#######...#..........#..........#.......#..#...#...#..#..........#..........#..#....#...#.......#..#.......#..#.......#..#.......#..#.......#...#.#.#.#...#..........#..........#...#...#...#.......#..#.......#..#########..#########...#######.....#...#....########...########...#....#..#..........................................................................................................................................................................................................';
var a=document.querySelector('#arctan'), s='';
for(var i=0; i<100; ++i){
	for(var j=0; j<100; ++j){
		var name;
		if(t[i*100+j]=='#')name='inversion.png';
		else name='arctan.png';
		s+='<img src="'+name+'" width="1%">';
	}
	s+='<br><br>';
}
a.style.lineHeight='0.3';
a.innerHTML=s;