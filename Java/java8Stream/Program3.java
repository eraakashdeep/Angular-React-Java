// Find First Non-repeated character in a string

public class Program3 {
    public static void main(String[] args) {
        String str = "Aakash";

        Character c = str.chars()
        .mapToObj(ch -> (char) ch)
        .filter(ch -> str.indexOf(ch) == str.lastIndexOf(ch))
        .findFirst()
        .orElse(null);

        System.err.println("Original List : " + str);
        System.out.println("NonRepeatable char : " + c);
    }
}
