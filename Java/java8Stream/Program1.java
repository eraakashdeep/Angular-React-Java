//program 1 - Reverse a string using Java 8

public class Program1 {
    public static void main(String[] args) {
        String str = "Aakash Deep";
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println("Original : " + str);
        System.out.println("Reversed : " + reversed);

        // //without using built method

        // String reversed = "";

        // for (int i=str.length()-1;i>=0;i--){
        //     reversed = reversed + str.charAt(i);
        // }
        // System.err.println("Reversed : " + reversed);
    }
}