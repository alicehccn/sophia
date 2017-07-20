import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


/*
left = ["(", "{", "["]
right = [")", "}", "]"]
map = {
    "(": ")",
    ")": "(",
    "{": "}",
    "}": "{",
    "[": "]",
    "]": "["
}
*/

public class BalancedBrackets {
    
    public static boolean isBalanced(String expression) {
        Stack<String> st = new Stack<>();
        String[] left = {"(", "{", "["};
        String[] right = {")", "}", "]"};
        Map<String, String> map = new HashMap<>();
        for (int i=0; i<left.length; i++) {
            map.put(left[i], right[i]);
            map.put(right[i], left[i]);
        }
        for (int i=0; i<expression.length(); i++) {
            String e = expression.substring(i,i+1);
            if (Arrays.asList(left).contains(e)) {
                st.push(e);
            } else if (Arrays.asList(right).contains(e)) {
                if (st.empty()) {
                    return false;
                }
                if (st.peek().equals(map.get(e))){
                    st.pop();
                }
            }
        }
        return st.empty();
    }
  
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int a0 = 0; a0 < t; a0++) {
            String expression = in.next();
            System.out.println( (isBalanced(expression)) ? "YES" : "NO" );
        }
    }
}
