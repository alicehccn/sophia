from __future__ import print_function

def main():
	matrix = [
		[0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 1, 0],
		[0, 1, 1, 0, 1, 0],
		[1, 0, 0, 1, 0, 0],
		[0, 0, 1, 1, 1, 1],
		[0, 1, 1, 1, 0, 0]
	]
	n = len(matrix)
	m = len(matrix[0])

	for i in range(n):
		for j in range(m):
			print(matrix[j][i], end=' ')
		print('\n')


if __name__ == '__main__':
	main()
