# ASCII patterns for each letter, now with P and Y
ascii_letters = {
	"A": [
		"....#....",
		"...#.#...",
		"..#...#..",
		".#######.",
		"#.......#",
		"#.......#",
	],
	"B": [
		"#######..",
		"#......#.",
		"#######..",
		"#......#.",
		"#......#.",
		"#######..",
	],
	"C": [
		".#######.",
		"#.......#",
		"#........",
		"#........",
		"#.......#",
		".#######.",
	],
	"D": [
		"#######..",
		"#......#.",
		"#.......#",
		"#.......#",
		"#......#.",
		"#######..",
	],
	"E": [
		"########.",
		"#........",
		"######...",
		"#........",
		"#........",
		"########.",
	],
	"H": [
		"#.......#",
		"#.......#",
		"#########",
		"#.......#",
		"#.......#",
		"#.......#",
	],
	"L": [
		"#........",
		"#........",
		"#........",
		"#........",
		"#.......#",
		"#########",
	],
	"O": [
		".#######.",
		"#.......#",
		"#.......#",
		"#.......#",
		"#.......#",
		".#######.",
	],
	"W": [
		"#.......#",
		"#.......#",
		"#.......#",
		"#...#...#",
		".#.#.#.#.",
		"..#...#..",
	],
	"N": [
		"#.......#",
		"##......#",
		"#.#.....#",
		"#..#....#",
		"#...#...#",
		"#....#..#",
	],
	"P": [
		"########.",
		"#.......#",
		"#.......#",
		"########.",
		"#........",
		"#........",
	],
	"Y": [
		"#.......#",
		".#.....#.",
		"..#...#..",
		"...#.#...",
		"....#....",
		"....#....",
	]
}

def print_ascii_text(text):
	# Convert text to uppercase to match dictionary keys
	text = text.upper()
	
	# Prepare a list to hold each line of the ASCII text
	lines = [""] * 6  # assuming each letter pattern is 6 lines tall
	
	# Build each line by appending corresponding parts of each letter
	for char in text:
		if char in ascii_letters:
			for i in range(6):
				lines[i] += ascii_letters[char][i] + "  "  # add spacing between letters
		else:
			for i in range(6):
				lines[i] += " " * 10  # space for unsupported characters

	# Print each line to form the ASCII art text
	res=''
	for line in lines:
		line=line[:-2]
		n=100-len(line)
		line='.'*(n//2)+line+'.'*((n+1)//2)
		res+=line.replace(' ', '.')
		print(line.replace(' ', '.'))
	return res

# Example usage
s=''
s+='.'*300
for i in range(3):
	print('.'*100)
s+=print_ascii_text("HAPPY")
s+='.'*300
for i in range(3):
	print('.'*100)
s+=print_ascii_text("HALLOWEEN")
while len(s)<2000:
	s+='.'
s=s*5
print(s)
