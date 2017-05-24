Write function makeUpperCase.
FUNDAMENTALS

#include <string>

std::string makeUpperCase (const std::string& input_str)
{
    std::string s = "";
    for(int i = 0; i < input_str.size();i++)
    {
        if((input_str[i] >= 97)&&(input_str[i] <= 122))
            s += input_str[i] - 32;
        else s += input_str[i];
    }
    return s;
}
