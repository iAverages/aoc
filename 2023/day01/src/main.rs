fn main() {
    let input = include_str!("../input.txt")
        .split('\n')
        .collect::<Vec<&str>>();
    println!("Part 1: {}", part1(input.clone()));
    println!("Part 2: {}", part2(input));
}

fn part1(input: Vec<&str>) -> u32 {
    let mut sum = 0;
    for line in input {
        let mut numbers = String::new();
        let first = line.chars().find(|c| c.is_numeric()).unwrap();
        let last = line.chars().rev().find(|c| c.is_numeric()).unwrap();
        numbers.push(first);
        numbers.push(last);
        sum += numbers.parse::<u32>().unwrap();
    }

    sum
}

const TEXT_NUMBERS: [&str; 10] = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
];

fn convert_text_to_number(word: &str) -> Option<u32> {
    for (i, text_number) in TEXT_NUMBERS.iter().enumerate() {
        if word.contains(text_number) {
            return Some(i as u32);
        }
    }

    None
}

fn find_number<I>(chars: I, reverse: bool) -> u32
where
    I: Iterator<Item = char>,
{
    let mut numbers = String::new();
    let mut word = String::new();

    for c in chars {
        word.push(c);

        let w = if reverse {
            word.chars().rev().collect::<String>()
        } else {
            word.clone()
        };

        if let Some(number) = convert_text_to_number(&w) {
            numbers.push_str(&number.to_string());
            word.clear();
            break;
        }
        if c.is_numeric() {
            numbers.push(c);
            word.clear();
            break;
        }
    }

    numbers.parse::<u32>().unwrap()
}

fn part2(input: Vec<&str>) -> u32 {
    let mut sum = 0;
    for line in input {
        let first = find_number(line.chars(), false);
        let last = find_number(line.chars().rev(), true);
        sum += (first * 10) + last;
    }

    sum
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_part1() {
        let test_input = include_str!("../test_input_1.txt")
            .split('\n')
            .collect::<Vec<&str>>();
        assert_eq!(part1(test_input), 142);
    }

    #[test]
    fn test_part2() {
        let test_input = include_str!("../test_input_2.txt")
            .split('\n')
            .collect::<Vec<&str>>();
        assert_eq!(part2(test_input), 281);
    }
}
