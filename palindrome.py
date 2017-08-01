import pdb
import re

"""
Examples:

Racecar
Hannah
I did, did I?
Was it a cat I saw?
Step on no pets
Eva, can I see bees in a cave?
"""

def is_palindrome(string, mid, end):
	for i in range(mid):
		if string[i] != string[end-i-1]:
			return False
	return True


def main():
	raw_string = raw_input('Enter a word or a sentence: ')
	string = re.sub(r'\W+', '', raw_string).lower()
	end = len(string)
	mid = end / 2
	if is_palindrome(string, mid, end):
		print 'The answer is YES.'
	else:
		print 'The answer is NO.'


if __name__ == '__main__':
	main()
