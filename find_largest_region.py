"""
Practicing DFS
"""

class Grid:
    def __init__(self):
        self.rows = []
        
    def append(self, row):
        self.rows.append(row)

    def get_biggest_region(self, rows):
        maxx = 0
        for i in range(len(self.rows)):
            for j in range(len(self.rows[0])):
                maxx = max(maxx, self.count_cells(self.rows, i, j))
        return maxx
    
    def count_cells(self, rows, i, j):
        if i<0 or j<0 or i>=len(self.rows) or j>=len(self.rows[0]):
            return 0
        if self.rows[i][j] == 0:
            return 0
        k = self.rows[i][j];
        self.rows[i][j] -= 1;
        k += self.count_cells(self.rows, i+1, j)
        k += self.count_cells(self.rows, i-1, j)
        k += self.count_cells(self.rows, i, j+1)
        k += self.count_cells(self.rows, i, j-1)
        k += self.count_cells(self.rows, i+1, j+1)
        k += self.count_cells(self.rows, i-1, j-1)
        k += self.count_cells(self.rows, i+1, j-1)
        k += self.count_cells(self.rows, i-1, j+1)
        return k


def main():
    matrix = [
        [1, 1, 0, 0, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [1, 0, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0]
    ]


    grid = Grid()
    for row in matrix:
        grid.append(row)
    print(grid.get_biggest_region(grid.rows))


if __name__ == '__main__':
    main()
