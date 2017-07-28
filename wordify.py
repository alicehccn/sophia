from __future__ import print_function

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


def get_hundreds(parts, index, num):
    parts += table.get(num[index-2])
    parts += ' hundred '
    parts += 'and'
    return parts


def get_tens(parts, index, num):
    try:
        parts += table.get(num) + ' '
    except:
        parts += ' ' + table[num[index-1]+'0'] + ' '
        parts += table[num[index]] + ' '
    return parts


def main():
    num = input('\nEnter a number: ')
    chunks = Stack()

    places = ['', 'thousand', 'million', 'billion', 'trillion']
    num = str(num)

    j = 0
    for i in range(len(num)-1, 0, -3):
        if i < 2:
            break
        parts = ''
        hundreds = get_hundreds(parts, i, num)
        tens = get_tens(parts, i, num)
        parts = hundreds + tens
        parts += places[j] + ' '
        num = num[:i-2]
        chunks.push(parts)
        j += 1

    for i in range(len(num), 0, -2):
        parts = ''
        parts += get_tens(parts, i-1, num)
        parts += places[j] + ' '
        chunks.push(parts)
        j += 1

    output = 'The answer is: '
    for _ in range(chunks.size()):
        output += chunks.pop().upper()
    print(output, end='\n\n')


if __name__ == '__main__':
    main()
