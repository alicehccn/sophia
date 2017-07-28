from __future__ import print_function

import math

"""

A translation game, from numeric to English words

"""

table = {
    '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten',
    '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
    '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen',
    '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty',
    '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety',
    '0': '', '00': ''
}
places = ['', 'thousand', 'million', 'billion', 'trillion']


class Stack:
     def __init__(self):
         self.items = []

     def isEmpty(self):
         return self.items == []

     def push(self, item):
         self.items.append(item)

     def pop(self):
         return self.items.pop()

     def peek(self):
         return self.items[len(self.items)-1]

     def size(self):
         return len(self.items)


class Number:
    def __init__(self):
        self.data = ''

    def get_hundreds(self, index, num):
        # import pdb; pdb.set_trace()
        if table.get(num[index-2]):
            self.data += table.get(num[index-2])
            self.data += ' '
            self.data += 'hundred '
        return self.data

    def get_tens(self, index, num):
        # if index > 2:
        #     self.data += 'and '
        if table.get(num[index-1:]):
            self.data += table.get(num[index-1:]) + ' '
        elif table.get(num[index-1]+'0'):
            self.data += table.get(num[index-1]+'0') + ' '
        return self.data

    def get_ones(self, index, num):
        if index < 1:
            return self.data
        if table.get(num[index]):
            self.data += table.get(num[index]) + ' '
        return self.data

    def merge(self, index, num):
        return self.get_hundreds(index, num) + self.get_tens(index, num) + self.get_ones(index, num)

    def append_place(self, index, place):
        self.data += place[index] + ' '
        return self.data


def prompt():
    num = input('\nEnter a number: ')
    if math.log10(num) > 14:
        print('Please make sure number is valid.')
        print('Constraint: number <= 10**14.\n')
        return prompt()
    return num


def main():
    num = prompt()
    # num = 1003232012
    num = str(num)
    chunks = Stack()

    j = 0
    for i in range(len(num)-1, 0, -3):
        if i < 2:
            break
        parts = Number()
        parts.merge(i, num)
        parts.append_place(j, places)
        num = num[:i-2]
        chunks.push(parts.data)
        j += 1

    for i in range(len(num), 0, -2):
        parts = Number()
        parts.get_tens(i-1, num)
        parts.get_ones(i-1, num)
        parts.append_place(j, places)
        chunks.push(parts.data)
        j += 1

    output = 'The answer is: '
    for _ in range(chunks.size()):
        output += chunks.pop().upper()
    print(output, end='\n\n')


if __name__ == '__main__':
    main()
