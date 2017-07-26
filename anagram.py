from __future__ import print_function
from collections import defaultdict


def parse_txt(filename):
    with open(filename, 'r') as f:
        read_data = f.read()
    return read_data


def get_input_data(filename):
    data = parse_txt(filename)
    data = [d.lower() for d in data.split('\n') if len(d) >= 4]
    data = sorted(list(set(data)))
    return data


def is_anagrams(a, b):
    table = defaultdict(int);
    if a == b:
        return False
    for i in range(len(a)):
        table[a[i]] += 1
    for i in range(len(b)):
        table[b[i]] -= 1
    for col in table.values():
        if col != 0:
            return False
    return True


def main():
    # Get all words, stored in a set and a dict
    words = get_input_data('/usr/share/dict/words')
    dictionary = defaultdict(list)
    for word in words:
        dictionary[word[0]].append(word)

    # # Similar to hashmap or hashlist
    anagrams = defaultdict(set)
    i = 0
    print('Searching for anagrams in %s words...\n' % len(words))
    while i < len(words):
        relevant_words = [word for letter in set(words[i]) for word in dictionary[letter] if len(word) == len(words[i])]
        for j in range(len(relevant_words)):
            if relevant_words[j] not in anagrams.keys() and is_anagrams(words[i], relevant_words[j]):
                print(words[i], relevant_words[j])
                try:
                    words.remove(relevant_words[j])
                except:
                    pass
                anagrams[words[i]].add(relevant_words[j])
        i += 1

    # Sort and print in lexicographical order
    anagrams = sorted(anagrams.items())
    for key, values in anagrams:
        print(key, *sorted(values), sep=', ')
    print('=' * 60)
    print('Found %s sets of anagrams, printed in lexicographical order.' % len(anagrams))


if __name__ == '__main__':
    main()
