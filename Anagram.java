import java.io.*;
import java.util.*;

/*
Using a hash table
*/

public class Anagram {

    static boolean isAnagram(String a, String b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        Map<String, Integer> frequency = new HashMap<String, Integer>();
        for (int i=0; i<a.length(); i++) {
            frequency.put(a.substring(i,i+1), 0);
        }
        for (int j=0; j<a.length(); j++) {
            int n = frequency.get(a.substring(j,j+1)) + 1;
            frequency.put(a.substring(j,j+1), n);
        }
        for (int i=0; i<b.length(); i++) {
            int x;
            if(frequency.get(b.substring(i,i+1)) != null) {
                x = frequency.get(b.substring(i,i+1));
                frequency.put(b.substring(i,i+1), x-1);
            } else {
                frequency.put(b.substring(i,i+1), 1);
            }

        }
        List<Integer> list = new ArrayList<Integer>(frequency.values());
        int sum = 0;
        for (int i : list) {
            if (i != 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
