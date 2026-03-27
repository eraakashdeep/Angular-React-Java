// Program 2 - find dupllicate elements in a list

import java.util.*;
import java.util.stream.*;

public class Program2{
    public static void main(String[] args) {
     List<Integer> list = Arrays.asList(1,2,3,4,5,5,6,1,2,1,2); 
     Set<Integer> duplicate = list.stream()
     .filter(n -> Collections.frequency(list, n)>1)
     .collect(Collectors.toSet());
     
     System.out.println("Original List : " + list);
     System.out.println("Duplicate : " + duplicate);
    }
}