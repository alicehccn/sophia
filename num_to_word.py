from __future__ import print_function

"""
A translation game, from numeric to English words
"""


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


def main():
    num = input('Enter a number: ')
    stack = Stack()
    table = {
        '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
        '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten',
        '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
        '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen',
        '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty',
        '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety',
        '0': '', '00': ''
    }
    deci = ['', 'thousand', 'million', 'billion', 'trillion']
    num = str(num)
    i = len(num)
    j = 0
    while i >= 3:
        parts = ''
        parts += table[num[-3]] + ' hundred '
        parts += 'and'
        parts += ' ' + table[num[-2]+'0'] + ' '
        parts += table[num[-1]] + ' '
        parts += deci[j] + ' '
        num = num[:i-3]
        i -= 3
        j += 1
        stack.push(parts)

    while i > 0:
        parts = ''
        if i == 1:
            parts += table[num[0]] + ' '
            i -= 1
        else:
            parts += ' ' + table[num[-2]+'0'] + ' '
            parts += table[num[-1]] + ' '
            i -= 2
        parts += deci[j] + ' '
        stack.push(parts)

    output = 'The answer is: '
    for _ in range(stack.size()):
        output += stack.pop()
    print(output)


if __name__ == '__main__':
    main()
