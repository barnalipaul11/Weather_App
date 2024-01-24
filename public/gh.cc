#include <iostream>

int findMaxXOR(int lo, int hi, int k) {
    int maxAB = 0;
    
    for (int a = lo; a <= hi; ++a) {
        for (int b = a + 1; b <= hi; ++b) {
            int currentXOR = a ^ b;
            if (currentXOR > maxAB && currentXOR <= k) {
                maxAB = currentXOR;
            }
        }
    }
    
    return maxAB;
}

int main() {
    int lo = 3;
    int hi = 4;
    int k = 7;

    int result = findMaxXOR(lo, hi, k);

    std::cout << "The maximal XORed value is: " << result << std::endl;

    return 0;
}
