var output = "Last Period";
var output2 = "28 days";
var output3 = "6";
var output4 = "1";
const dropdowns = document.querySelectorAll('.dropdown');
const indianCelebrities = [
    { date: "01 Jan 1919", name: "J. D. Salinger", occupation: "Author" },
    { date: "02 Jan 1920", name: "Isaac Asimov", occupation: "Science Fiction Writer" },
    { date: "03 Jan 1892", name: "J. R. R. Tolkien", occupation: "Author" },
    { date: "04 Jan 1809", name: "Louis Braille", occupation: "Inventor" },
    { date: "05 Jan 1931", name: "Robert Duvall", occupation: "Actor" },
    { date: "06 Jan 1412", name: "Joan of Arc", occupation: "Heroine" },
    { date: "07 Jan 1964", name: "Nicholas Cage", occupation: "Actor" },
    { date: "08 Jan 1935", name: "Elvis Presley", occupation: "Singer, Actor" },
    { date: "09 Jan 1982", name: "Kate Middleton", occupation: "Duchess of Cambridge" },
    { date: "10 Jan 1945", name: "Rod Stewart", occupation: "Singer" },
    { date: "11 Jan 1755", name: "Alexander Hamilton", occupation: "Founding Father, Statesman" },
    { date: "12 Jan 1964", name: "Jeff Bezos", occupation: "Entrepreneur" },
    { date: "13 Jan 1977", name: "Orlando Bloom", occupation: "Actor" },
    { date: "14 Jan 1741", name: "Benedict Arnold", occupation: "American Revolutionary War General" },
    { date: "15 Jan 1929", name: "Martin Luther King Jr.", occupation: "Civil Rights Leader" },
    { date: "16 Jan 1979", name: "Aaliyah", occupation: "Singer, Actress" },
    { date: "17 Jan 1706", name: "Benjamin Franklin", occupation: "Founding Father, Inventor" },
    { date: "18 Jan 1955", name: "Kevin Costner", occupation: "Actor, Director" },
    { date: "19 Jan 1809", name: "Edgar Allan Poe", occupation: "Writer, Poet" },
    { date: "20 Jan 1930", name: "Buzz Aldrin", occupation: "Astronaut" },
    { date: "21 Jan 1953", name: "Paul Allen", occupation: "Entrepreneur, Philanthropist" },
    { date: "22 Jan 1965", name: "Diane Lane", occupation: "Actress" },
    { date: "23 Jan 1944", name: "Rutger Hauer", occupation: "Actor" },
    { date: "24 Jan 1941", name: "Neil Diamond", occupation: "Singer-Songwriter" },
    { date: "25 Jan 1981", name: "Alicia Keys", occupation: "Singer-Songwriter, Pianist" },
    { date: "26 Jan 1958", name: "Ellen DeGeneres", occupation: "Comedian, Television Host" },
    { date: "27 Jan 1756", name: "Wolfgang Amadeus Mozart", occupation: "Composer" },
    { date: "28 Jan 1981", name: "Elijah Wood", occupation: "Actor" },
    { date: "29 Jan 1954", name: "Oprah Winfrey", occupation: "Media Proprietor, Talk Show Host" },
    { date: "30 Jan 1882", name: "Franklin D. Roosevelt", occupation: "32nd President of the United States" },
    { date: "31 Jan 1981", name: "Justin Timberlake", occupation: "Singer, Actor" },
    { date: "01 Feb 1902", name: "Langston Hughes", occupation: "Poet, Writer" },
    { date: "02 Feb 1882", name: "James Joyce", occupation: "Writer" },
    { date: "03 Feb 1809", name: "Felix Mendelssohn", occupation: "Composer" },
    { date: "04 Feb 1902", name: "Charles Lindbergh", occupation: "Aviator" },
    { date: "05 Feb 1971", name: "Sara Evans", occupation: "Country Singer" },
    { date: "06 Feb 1945", name: "Bob Marley", occupation: "Reggae Singer-Songwriter" },
    { date: "07 Feb 1812", name: "Charles Dickens", occupation: "Writer" },
    { date: "08 Feb 1828", name: "Jules Verne", occupation: "Author" },
    { date: "09 Feb 1943", name: "Joe Pesci", occupation: "Actor" },
    { date: "10 Feb 1890", name: "Boris Pasternak", occupation: "Writer, Poet" },
    { date: "11 Feb 1847", name: "Thomas Edison", occupation: "Inventor" },
    { date: "12 Feb 1809", name: "Charles Darwin", occupation: "Naturalist" },
    { date: "13 Feb 1942", name: "Peter Tork", occupation: "Musician (The Monkees)" },
    { date: "14 Feb 1942", name: "Michael Bloomberg", occupation: "Entrepreneur, Politician" },
    { date: "15 Feb 1564", name: "Galileo Galilei", occupation: "Astronomer, Physicist" },
    { date: "16 Feb 1926", name: "John Schlesinger", occupation: "Film Director" },
    { date: "17 Feb 1963", name: "Michael Jordan", occupation: "Basketball Player" },
    { date: "18 Feb 1933", name: "Yoko Ono", occupation: "Artist, Musician" },
    { date: "19 Feb 1473", name: "Nicolas Copernicus", occupation: "Astronomer" },
    { date: "20 Feb 1927", name: "Sidney Poitier", occupation: "Actor, Film Director" },
    { date: "21 Feb 1965", name: "Nina Simone", occupation: "Singer-Songwriter" },
    { date: "22 Feb 1732", name: "George Washington", occupation: "First President of the United States" },
    { date: "23 Feb 1868", name: "W. E. B. Du Bois", occupation: "Civil Rights Activist, Writer" },
    { date: "24 Feb 1955", name: "Alain Prost", occupation: "Formula One Driver" },
    { date: "25 Feb 1966", name: "Téa Leoni", occupation: "Actress" },
    { date: "26 Feb 1802", name: "Victor Hugo", occupation: "Author" },
    { date: "27 Feb 1932", name: "Elizabeth Taylor", occupation: "Actress" },
    { date: "28 Feb 1931", name: "Gavin MacLeod", occupation: "Actor" },
    { date: "29 Feb 1972", name: "Antonio Sabàto Jr.", occupation: "Actor, Model" },
    { date: "01 Mar 1904", name: "Glenn Miller", occupation: "Musician" },
    { date: "02 Mar 1904", name: "Dr. Seuss", occupation: "Author" },
    { date: "03 Mar 1847", name: "Alexander Graham Bell", occupation: "Inventor, Scientist" },
    { date: "04 Mar 1928", name: "Alan Sillitoe", occupation: "Writer" },
    { date: "05 Mar 1974", name: "Eva Mendes", occupation: "Actress, Model" },
    { date: "06 Mar 1475", name: "Michelangelo", occupation: "Artist" },
    { date: "07 Mar 1956", name: "Bryan Cranston", occupation: "Actor" },
    { date: "08 Mar 1859", name: "Kenneth Grahame", occupation: "Writer" },
    { date: "09 Mar 1454", name: "Amerigo Vespucci", occupation: "Explorer" },
    { date: "10 Mar 1958", name: "Sharon Stone", occupation: "Actress" },
    { date: "11 Mar 1931", name: "Rupert Murdoch", occupation: "Media Mogul" },
    { date: "12 Mar 1917", name: "Googie Withers", occupation: "Actress" },
    { date: "13 Mar 1855", name: "Percy Fawcett", occupation: "Explorer" },
    { date: "14 Mar 1879", name: "Albert Einstein", occupation: "Physicist" },
    { date: "15 Mar 1993", name: "Kellan Lutz", occupation: "Actor, Model" },
    { date: "16 Mar 1751", name: "James Madison", occupation: "4th President of the United States" },
    { date: "17 Mar 1919", name: "Nat King Cole", occupation: "Singer" },
    { date: "18 Mar 1963", name: "Vanessa Williams", occupation: "Actress, Singer" },
    { date: "19 Mar 1687", name: "Bruce Willis", occupation: "Former Actor" },
    { date: "20 Mar 1957", name: "Spike Lee", occupation: "Film Director" },
    { date: "21 Mar 1962", name: "Matthew Broderick", occupation: "Actor" },
    { date: "22 Mar 1920", name: "Werner Klemperer", occupation: "Actor" },
    { date: "23 Mar 1976", name: "Michelle Monaghan", occupation: "Actress" },
    { date: "24 Mar 1874", name: "Harry Houdini", occupation: "Magician, Escape Artist" },
    { date: "25 Mar 1947", name: "Elton John", occupation: "Singer-Songwriter" },
    { date: "26 Mar 1874", name: "Robert Frost", occupation: "Poet" },
    { date: "27 Mar 1963", name: "Quentin Tarantino", occupation: "Film Director" },
    { date: "28 Mar 1986", name: "Lady Gaga", occupation: "Singer, Actress" },
    { date: "29 Mar 1790", name: "John Tyler", occupation: "10th President of the United States" },
    { date: "30 Mar 1853", name: "Vincent van Gogh", occupation: "Artist" },
    { date: "31 Mar 1596", name: "René Descartes", occupation: "Philosopher, Mathematician" },
    { date: "01 Apr 1815", name: "Otto von Bismarck", occupation: "German Statesman" },
    { date: "02 Apr 1805", name: "Hans Christian Andersen", occupation: "Author" },
    { date: "03 Apr 1924", name: "Marlon Brando", occupation: "Actor" },
    { date: "04 Apr 1928", name: "Maya Angelou", occupation: "Poet, Author" },
    { date: "05 Apr 1973", name: "Pharrell Williams", occupation: "Singer, Producer" },
    { date: "06 Apr 1928", name: "James D. Watson", occupation: "Biologist, Nobel Laureate" },
    { date: "07 Apr 1770", name: "William Wordsworth", occupation: "Poet" },
    { date: "08 Apr 1939", name: "John Madden", occupation: "American Football Coach" },
    { date: "09 Apr 1990", name: "Kristen Stewart", occupation: "Actress" },
    { date: "10 Apr 1952", name: "Steven Seagal", occupation: "Actor, Martial Artist" },
    { date: "11 Apr 1935", name: "Richard Berry", occupation: "Scientist (DNA Structure)" },
    { date: "12 Apr 1916", name: "Beverly Cleary", occupation: "Author" },
    { date: "13 Apr 1743", name: "Thomas Jefferson", occupation: "3rd President of the United States" },
    { date: "14 Apr 1961", name: "Robert Carlyle", occupation: "Actor" },
    { date: "15 Apr 1452", name: "Leonardo da Vinci", occupation: "Artist, Scientist" },
    { date: "16 Apr 1889", name: "Charlie Chaplin", occupation: "Actor, Filmmaker" },
    { date: "17 Apr 1972", name: "Jennifer Garner", occupation: "Actress" },
    { date: "18 Apr 1772", name: "David Ricardo", occupation: "Economist" },
    { date: "19 Apr 1946", name: "Tim Curry", occupation: "Actor, Singer" },
    { date: "20 Apr 1949", name: "Jessica Lange", occupation: "American Actress" },
    { date: "21 Apr 1926", name: "Queen Elizabeth II", occupation: "British Monarch" },
    { date: "22 Apr 1937", name: "Jack Nicholson", occupation: "Actor" },
    { date: "23 Apr 1564", name: "William Shakespeare", occupation: "Playwright, Poet" },
    { date: "24 Apr 1942", name: "Barbra Streisand", occupation: "Singer, Actress" },
    { date: "25 Apr 1917", name: "Ella Fitzgerald", occupation: "Jazz Singer" },
    { date: "26 Apr 1785", name: "John James Audubon", occupation: "Ornithologist, Naturalist" },
    { date: "27 Apr 1791", name: "Samuel Morse", occupation: "Inventor" },
    { date: "28 Apr 1908", name: "Oskar Schindler", occupation: "Industrialist, Hero" },
    { date: "29 Apr 1954", name: "Jerry Seinfeld", occupation: "Comedian, Actor" },
    { date: "30 Apr 1982", name: "Kirsten Dunst", occupation: "Actress" },
    { date: "01 May 1852", name: "Calamity Jane", occupation: "Frontierswoman" },
    { date: "02 May 1903", name: "Benjamin Spock", occupation: "Pediatrician, Author" },
    { date: "03 May 1903", name: "Bing Crosby", occupation: "Singer, Actor" },
    { date: "04 May 1929", name: "Audrey Hepburn", occupation: "Actress" },
    { date: "05 May 1818", name: "Karl Marx", occupation: "Philosopher, Economist" },
    { date: "06 May 1856", name: "Sigmund Freud", occupation: "Psychologist" },
    { date: "07 May 1833", name: "Johannes Brahms", occupation: "Composer" },
    { date: "08 May 1828", name: "Henry Dunant", occupation: "Red Cross Founder" },
    { date: "09 May 1949", name: "Billy Joel", occupation: "Singer-Songwriter" },
    { date: "10 May 1899", name: "Fred Astaire", occupation: "Dancer, Actor" },
    { date: "11 May 1888", name: "Irving Berlin", occupation: "Composer, Lyricist" },
    { date: "12 May 1820", name: "Florence Nightingale", occupation: "Nurse, Social Reformer" },
    { date: "13 May 1857", name: "Sir Ronald Ross", occupation: "Physician, Nobel Laureate" },
    { date: "14 May 1944", name: "George Lucas", occupation: "Filmmaker" },
    { date: "15 May 1923", name: "Richard Avedon", occupation: "Photographer" },
    { date: "16 May 1919", name: "Liberace", occupation: "Pianist, Entertainer" },
    { date: "17 May 1749", name: "Edward Jenner", occupation: "Physician, Scientist" },
    { date: "18 May 1897", name: "Frank Capra", occupation: "Film Director" },
    { date: "19 May 1925", name: "Malcolm X", occupation: "Civil Rights Activist" },
    { date: "20 May 1946", name: "Cher", occupation: "Singer, Actress" },
    { date: "21 May 1688", name: "Alexander Pope", occupation: "Poet" },
    { date: "22 May 1813", name: "Richard Wagner", occupation: "Composer" },
    { date: "23 May 1934", name: "Robert Moog", occupation: "Inventor (Moog Synthesizer)" },
    { date: "24 May 1941", name: "Bob Dylan", occupation: "Singer-Songwriter" },
    { date: "25 May 1803", name: "Ralph Waldo Emerson", occupation: "Essayist, Poet" },
    { date: "26 May 1907", name: "John Wayne", occupation: "Actor" },
    { date: "27 May 1968", name: "Jeff Bagwell", occupation: "Baseball Player" },
    { date: "28 May 1908", name: "Ian Fleming", occupation: "Author (James Bond Series)" },
    { date: "29 May 1917", name: "John F. Kennedy", occupation: "35th President of the United States" },
    { date: "30 May 1909", name: "Benny Goodman", occupation: "Jazz Musician" },
    { date: "31 May 1819", name: "Walt Whitman", occupation: "Poet" },
    { date: "01 Jun 1926", name: "Andy Griffith", occupation: "Actor" },
    { date: "02 Jun 1740", name: "Marquis de Sade", occupation: "Philosopher, Writer" },
    { date: "03 Jun 1925", name: "Tony Curtis", occupation: "Actor" },
    { date: "04 Jun 1975", name: "Angelina Jolie", occupation: "Actress, Humanitarian" },
    { date: "05 Jun 1971", name: "Mark Wahlberg", occupation: "Actor, Musician" },
    { date: "06 Jun 1799", name: "Alexandre Dumas", occupation: "Author" },
    { date: "07 Jun 1940", name: "Tom Jones", occupation: "Singer" },
    { date: "08 Jun 1867", name: "Frank Lloyd Wright", occupation: "Architect" },
    { date: "09 Jun 1963", name: "Johnny Depp", occupation: "Actor" },
    { date: "10 Jun 1922", name: "Judy Garland", occupation: "Actress, Singer" },
    { date: "11 Jun 1939", name: "Jackie Stewart", occupation: "Formula One Driver" },
    { date: "12 Jun 1924", name: "George H. W. Bush", occupation: "41st President of the United States" },
    { date: "13 Jun 1865", name: "W. B. Yeats", occupation: "Poet, Playwright" },
    { date: "14 Jun 1946", name: "Donald Trump", occupation: "45th President of the United States" },
    { date: "15 Jun 1954", name: "Jim Belushi", occupation: "Actor, Comedian" },
    { date: "16 Jun 1972", name: "John Cho", occupation: "American actor" },
    { date: "17 Jun 1882", name: "Igor Stravinsky", occupation: "Composer" },
    { date: "18 Jun 1942", name: "Paul McCartney", occupation: "Musician (The Beatles)" },
    { date: "19 Jun 1623", name: "Blaise Pascal", occupation: "Mathematician, Philosopher" },
    { date: "20 Jun 1967", name: "Nicole Kidman", occupation: "Actress" },
    { date: "21 Jun 1905", name: "Jean-Paul Sartre", occupation: "Philosopher, Writer" },
    { date: "22 Jun 1949", name: "Meryl Streep", occupation: "Actress" },
    { date: "23 Jun 1894", name: "Edward VIII", occupation: "Former King of the United Kingdom" },
    { date: "24 Jun 1987", name: "Lionel Messi", occupation: "Footballer" },
    { date: "25 Jun 1903", name: "George Orwell", occupation: "Author" },
    { date: "26 Jun 1916", name: "Giuseppe Tornatore", occupation: "Film Director" },
    { date: "27 Jun 1966", name: "J. J. Abrams", occupation: "Filmmaker" },
    { date: "28 Jun 1491", name: "King Henry VIII", occupation: "King of England" },
    { date: "29 Jun 1858", name: "George Washington Goethals", occupation: "Engineer (Panama Canal)" },
    { date: "30 Jun 1985", name: "Michael Phelps", occupation: "Swimmer" },
    { date: "01 Jul 1872", name: "Louis Bleriot", occupation: "Aviator" },
    { date: "02 Jul 1908", name: "Thurgood Marshall", occupation: "Supreme Court Justice" },
    { date: "03 Jul 1962", name: "Tom Cruise", occupation: "Actor" },
    { date: "04 Jul 1804", name: "Nathaniel Hawthorne", occupation: "Author" },
    { date: "05 Jul 1810", name: "P. T. Barnum", occupation: "Showman, Entrepreneur" },
    { date: "06 Jul 1921", name: "Nancy Reagan", occupation: "Former First Lady of the United States" },
    { date: "07 Jul 1901", name: "Vittorio De Sica", occupation: "Film Director" },
    { date: "08 Jul 1839", name: "John D. Rockefeller", occupation: "Business Magnate" },
    { date: "09 Jul 1956", name: "Tom Hanks", occupation: "Actor" },
    { date: "10 Jul 1856", name: "Nikola Tesla", occupation: "Inventor, Engineer" },
    { date: "11 Jul 1274", name: "Robert the Bruce", occupation: "Scottish King" },
    { date: "12 Jul 1817", name: "Henry David Thoreau", occupation: "Essayist, Poet" },
    { date: "13 Jul 1940", name: "Patrick Stewart", occupation: "Actor" },
    { date: "14 Jul 1913", name: "Gerald Ford", occupation: "38th President of the United States" },
    { date: "15 Jul 1606", name: "Rembrandt", occupation: "Painter, Etcher" },
    { date: "16 Jul 1952", name: "Stewart Copeland", occupation: "Musician (The Police)" },
    { date: "17 Jul 1899", name: "James Cagney", occupation: "Actor" },
    { date: "18 Jul 1918", name: "Nelson Mandela", occupation: "South African President, Activist" },
    { date: "19 Jul 1814", name: "Samuel Colt", occupation: "Inventor" },
    { date: "20 Jul 1938", name: "Natalie Wood", occupation: "Actress" },
    { date: "21 Jul 1899", name: "Ernest Hemingway", occupation: "Author" },
    { date: "22 Jul 1940", name: "Alex Trebek", occupation: "Game Show Host" },
    { date: "23 Jul 1961", name: "Woody Harrelson", occupation: "Actor" },
    { date: "24 Jul 1802", name: "Alexandre Dumas", occupation: "Author" },
    { date: "25 Jul 1920", name: "Rosalind Franklin", occupation: "Chemist, Biophysicist" },
    { date: "26 Jul 1943", name: "Mick Jagger", occupation: "Musician (The Rolling Stones)" },
    { date: "27 Jul 1975", name: "Alex Rodriguez", occupation: "Baseball Player" },
    { date: "28 Jul 1945", name: "Jim Davis", occupation: "Cartoonist (Garfield)" },
    { date: "29 Jul 1972", name: "Wil Wheaton", occupation: "American actor" },
    { date: "30 Jul 1818", name: "Emily Brontë", occupation: "Author" },
    { date: "31 Jul 1965", name: "J. K. Rowling", occupation: "Author (Harry Potter Series)" },
    { date: "01 Aug 1819", name: "Herman Melville", occupation: "Author" },
    { date: "02 Aug 1924", name: "James Baldwin", occupation: "Author" },
    { date: "03 Aug 1926", name: "Tony Bennett", occupation: "Singer" },
    { date: "04 Aug 1961", name: "Barack Obama", occupation: "44th President of the United States" },
    { date: "05 Aug 1930", name: "Neil Armstrong", occupation: "Astronaut" },
    { date: "06 Aug 1809", name: "Alfred Lord Tennyson", occupation: "Poet" },
    { date: "07 Aug 1876", name: "Margaret Mitchell", occupation: "Author (Gone with the Wind)" },
    { date: "08 Aug 1961", name: "The Edge", occupation: "Musician (U2)" },
    { date: "09 Aug 1938", name: "Rod Laver", occupation: "Tennis Player" },
    { date: "10 Aug 1874", name: "Herbert Hoover", occupation: "31st President of the United States" },
    { date: "11 Aug 1953", name: "Hulk Hogan", occupation: "Wrestler, Actor" },
    { date: "12 Aug 1896", name: "H. H. Munro (Saki)", occupation: "Author" },
    { date: "13 Aug 1899", name: "Alfred Hitchcock", occupation: "Film Director" },
    { date: "14 Aug 1945", name: "Steve Martin", occupation: "Actor, Comedian" },
    { date: "15 Aug 1769", name: "Napoleon Bonaparte", occupation: "French Emperor" },
    { date: "16 Aug 1954", name: "James Cameron", occupation: "Filmmaker" },
    { date: "17 Aug 1786", name: "Davy Crockett", occupation: "American Folk Hero" },
    { date: "18 Aug 1933", name: "Roman Polanski", occupation: "Film Director" },
    { date: "19 Aug 1946", name: "Bill Clinton", occupation: "42nd President of the United States" },
    { date: "20 Aug 1948", name: "Robert Plant", occupation: "Musician (Led Zeppelin)" },
    { date: "21 Aug 1986", name: "Usain Bolt", occupation: "Sprinter" },
    { date: "22 Aug 1862", name: "Claude Debussy", occupation: "Composer" },
    { date: "23 Aug 1978", name: "Kobe Bryant", occupation: "Basketball Player" },
    { date: "24 Aug 1899", name: "Jorge Luis Borges", occupation: "Writer" },
    { date: "25 Aug 1918", name: "Leonard Bernstein", occupation: "Composer, Conductor" },
    { date: "26 Aug 1910", name: "Mother Teresa", occupation: "Catholic Nun, Humanitarian" },
    { date: "27 Aug 1908", name: "Lyndon B. Johnson", occupation: "36th President of the United States" },
    { date: "28 Aug 1749", name: "Johann Wolfgang von Goethe", occupation: "Writer, Philosopher" },
    { date: "29 Aug 1915", name: "Ingrid Bergman", occupation: "Actress" },
    { date: "30 Aug 1871", name: "Ernest Rutherford", occupation: "Physicist (Atomic Structure)" },
    { date: "31 Aug 1870", name: "Maria Montessori", occupation: "Physician, Educator" },
    { date: "01 Sep 1923", name: "Rocky Marciano", occupation: "Boxer" },
    { date: "02 Sep 1964", name: "Keanu Reeves", occupation: "Actor" },
    { date: "03 Sep 1973", name: "Jennifer Paige", occupation: "Singer" },
    { date: "04 Sep 1928", name: "Dick York", occupation: "Actor" },
    { date: "05 Sep 1946", name: "Freddie Mercury", occupation: "British singer, songwriter" },
    { date: "06 Sep 1860", name: "Jane Addams", occupation: "Social Reformer" },
    { date: "07 Sep 1860", name: "Anna Mary Robertson (Grandma Moses)", occupation: "Painter" },
    { date: "08 Sep 1922", name: "Sid Caesar", occupation: "Comedian" },
    { date: "09 Sep 1960", name: "Hugh Grant", occupation: "Actor" },
    { date: "10 Sep 1960", name: "Colin Firth", occupation: "Actor" },
    { date: "11 Sep 1965", name: "Moby", occupation: "American musician" },
    { date: "12 Sep 1913", name: "Jesse Owens", occupation: "Olympic Athlete" },
    { date: "13 Sep 1916", name: "Roald Dahl", occupation: "Author" },
    { date: "14 Sep 1928", name: "Jayne Meadows", occupation: "Actress" },
    { date: "15 Sep 1857", name: "William Howard Taft", occupation: "27th President of the United States" },
    { date: "16 Sep 1925", name: "B. B. King", occupation: "Blues Musician" },
    { date: "17 Sep 1950", name: "Fee Waybill", occupation: "Musician (The Tubes)" },
    { date: "18 Sep 1905", name: "Greta Garbo", occupation: "Actress" },
    { date: "19 Sep 1928", name: "Adam West", occupation: "Actor" },
    { date: "20 Sep 1893", name: "Jimmy Mattern", occupation: "Aviator" },
    { date: "21 Sep 1866", name: "H. G. Wells", occupation: "Author" },
    { date: "22 Sep 1791", name: "Michael Faraday", occupation: "Physicist, Chemist" },
    { date: "23 Sep 1930", name: "Ray Charles", occupation: "Musician" },
    { date: "24 Sep 1896", name: "F. Scott Fitzgerald", occupation: "Author" },
    { date: "25 Sep 1952", name: "Christopher Reeve", occupation: "Actor" },
    { date: "26 Sep 1948", name: "Olivia Newton-John", occupation: "Singer, Actress" },
    { date: "27 Sep 1792", name: "George Cruikshank", occupation: "Illustrator" },
    { date: "28 Sep 1968", name: "Naomi Watts", occupation: "Actress" },
    { date: "29 Sep 1758", name: "Horatio Nelson", occupation: "Admiral" },
    { date: "30 Sep 1964", name: "Monica Bellucci", occupation: "Actress" },
    { date: "01 Oct 1924", name: "Jimmy Carter", occupation: "39th President of the United States" },
    { date: "02 Oct 1869", name: "Mahatma Gandhi", occupation: "Indian Leader, Peace Activist" },
    { date: "03 Oct 1916", name: "James Herriot", occupation: "Veterinarian, Author" },
    { date: "04 Oct 1946", name: "Susan Sarandon", occupation: "Actress" },
    { date: "05 Oct 1951", name: "Bob Geldof", occupation: "Musician, Activist" },
    { date: "06 Oct 1963", name: "Elisabeth Shue", occupation: "Actress" },
    { date: "07 Oct 1885", name: "Niels Bohr", occupation: "Physicist, Nobel Laureate" },
    { date: "08 Oct 1943", name: "Chevy Chase", occupation: "Comedian, Actor" },
    { date: "09 Oct 1940", name: "John Lennon", occupation: "Musician (The Beatles)" },
    { date: "10 Oct 1914", name: "Ivory Joe Hunter", occupation: "Musician" },
    { date: "11 Oct 1884", name: "Eleanor Roosevelt", occupation: "Former First Lady of the United States" },
    { date: "12 Oct 1935", name: "Luciano Pavarotti", occupation: "Opera Singer" },
    { date: "13 Oct 1925", name: "Margaret Thatcher", occupation: "Former British Prime Minister" },
    { date: "14 Oct 1927", name: "Roger Moore", occupation: "Actor" },
    { date: "15 Oct 1844", name: "Friedrich Nietzsche", occupation: "Philosopher" },
    { date: "16 Oct 1854", name: "Oscar Wilde", occupation: "Playwright, Author" },
    { date: "17 Oct 1915", name: "Arthur Miller", occupation: "Playwright" },
    { date: "18 Oct 1926", name: "Chuck Berry", occupation: "Musician" },
    { date: "19 Oct 1931", name: "John le Carré", occupation: "Author" },
    { date: "20 Oct 1950", name: "Tom Petty", occupation: "Musician" },
    { date: "21 Oct 1956", name: "Carrie Fisher", occupation: "Actress, Writer" },
    { date: "22 Oct 1811", name: "Franz Liszt", occupation: "Composer" },
    { date: "23 Oct 1940", name: "Pelé", occupation: "Footballer" },
    { date: "24 Oct 1936", name: "Bill Wyman", occupation: "Musician (The Rolling Stones)" },
    { date: "25 Oct 1881", name: "Pablo Picasso", occupation: "Artist" },
    { date: "26 Oct 1947", name: "Hillary Clinton", occupation: "67th United States Secretary of State" },
    { date: "27 Oct 1728", name: "Captain James Cook", occupation: "Explorer" },
    { date: "28 Oct 1955", name: "Bill Gates", occupation: "Co-founder of Microsoft" },
    { date: "29 Oct 1971", name: "Winona Ryder", occupation: "Actress" },
    { date: "30 Oct 1885", name: "Ezra Pound", occupation: "Poet" },
    { date: "31 Oct 1795", name: "John Keats", occupation: "Poet" },
    { date: "01 Nov 1755", name: "Marie Antoinette", occupation: "Queen of France" },
    { date: "02 Nov 1755", name: "Marie Antoinette", occupation: "Queen of France" },
    { date: "03 Nov 1901", name: "André Malraux", occupation: "Author, Statesman" },
    { date: "04 Nov 1879", name: "Will Rogers", occupation: "Humorist, Actor" },
    { date: "05 Nov 1913", name: "Vivien Leigh", occupation: "Actress" },
    { date: "06 Nov 1916", name: "Ray Conniff", occupation: "Musician" },
    { date: "07 Nov 1867", name: "Marie Curie", occupation: "Physicist, Chemist" },
    { date: "08 Nov 1949", name: "Bonnie Raitt", occupation: "Singer, Songwriter" },
    { date: "09 Nov 1877", name: "Enrico De Nicola", occupation: "Italian President" },
    { date: "10 Nov 1977", name: "Brittany Murphy", occupation: "Actress" },
    { date: "11 Nov 1885", name: "George S. Patton", occupation: "General" },
    { date: "12 Nov 1840", name: "Auguste Rodin", occupation: "Sculptor" },
    { date: "13 Nov 1850", name: "Robert Louis Stevenson", occupation: "Author" },
    { date: "14 Nov 1900", name: "Aaron Copland", occupation: "Composer" },
    { date: "15 Nov 1887", name: "Georgia O'Keeffe", occupation: "Artist" },
    { date: "16 Nov 1907", name: "Burgess Meredith", occupation: "Actor" },
    { date: "17 Nov 1942", name: "Martin Scorsese", occupation: "Filmmaker" },
    { date: "18 Nov 1908", name: "Imogene Coca", occupation: "Comedian, Actress" },
    { date: "19 Nov 1831", name: "James A. Garfield", occupation: "20th President of the United States" },
    { date: "20 Nov 1916", name: "Duane Allman", occupation: "Musician" },
    { date: "21 Nov 1694", name: "Voltaire", occupation: "Philosopher" },
    { date: "22 Nov 1890", name: "Charles de Gaulle", occupation: "French President" },
    { date: "23 Nov 1804", name: "Franklin Pierce", occupation: "14th President of the United States" },
    { date: "24 Nov 1784", name: "Zachary Taylor", occupation: "12th President of the United States" },
    { date: "25 Nov 1844", name: "Karl Benz", occupation: "Automobile Engineer" },
    { date: "26 Nov 1922", name: "Charles M. Schulz", occupation: "Cartoonist (Peanuts)" },
    { date: "27 Nov 1940", name: "Bruce Lee", occupation: "Martial Artist, Actor" },
    { date: "28 Nov 1757", name: "William Blake", occupation: "Poet, Artist" },
    { date: "29 Nov 1898", name: "C. S. Lewis", occupation: "Author" },
    { date: "30 Nov 1835", name: "Mark Twain", occupation: "Author, Humorist" },
    { date: "01 Dec 1913", name: "Mary Martin", occupation: "Actress, Singer" },
    { date: "02 Dec 1981", name: "Britney Spears", occupation: "Singer, Actress" },
    { date: "03 Dec 1960", name: "Julianne Moore", occupation: "Actress" },
    { date: "04 Dec 1925", name: "Albert Bandura", occupation: "Psychologist" },
    { date: "05 Dec 1901", name: "Walt Disney", occupation: "Animator, Entrepreneur" },
    { date: "06 Dec 1920", name: "Dave Brubeck", occupation: "Jazz Pianist" },
    { date: "07 Dec 1873", name: "Willa Cather", occupation: "Author" },
    { date: "08 Dec 1865", name: "Jean Sibelius", occupation: "Composer" },
    { date: "09 Dec 1906", name: "Grace Hopper", occupation: "Computer Scientist, Navy Rear Admiral" },
    { date: "10 Dec 1830", name: "Emily Dickinson", occupation: "Poet" },
    { date: "11 Dec 1882", name: "Fiorello La Guardia", occupation: "New York City Mayor" },
    { date: "12 Dec 1915", name: "Frank Sinatra", occupation: "Singer, Actor" },
    { date: "13 Dec 1818", name: "Mary Todd Lincoln", occupation: "Former First Lady of the United States" },
    { date: "14 Dec 1896", name: "James Doolittle", occupation: "Aviator, General" },
    { date: "15 Dec 1890", name: "Fritz Lang", occupation: "Film Director" },
    { date: "16 Dec 1770", name: "Ludwig van Beethoven", occupation: "Composer" },
    { date: "17 Dec 1770", name: "Ludwig van Beethoven", occupation: "Composer" },
    { date: "18 Dec 1879", name: "Paul Klee", occupation: "Painter" },
    { date: "19 Dec 1944", name: "Richard Leakey", occupation: "Paleoanthropologist, Conservationist" },
    { date: "20 Dec 1946", name: "Uri Geller", occupation: "Illusionist" },
    { date: "21 Dec 1948", name: "Samuel L. Jackson", occupation: "Actor" },
    { date: "22 Dec 1858", name: "Giacomo Puccini", occupation: "Composer" },
    { date: "23 Dec 1964", name: "Eddie Vedder", occupation: "American singer" },
    { date: "24 Dec 1971", name: "Ricky Martin", occupation: "Singer, Actor" },
    { date: "25 Dec 1642", name: "Isaac Newton", occupation: "Physicist, Mathematician" },
    { date: "26 Dec 1971", name: "Jared Leto", occupation: "American actor" },
    { date: "27 Dec 1822", name: "Louis Pasteur", occupation: "Chemist, Microbiologist" },
    { date: "28 Dec 1856", name: "Woodrow Wilson", occupation: "28th President of the United States" },
    { date: "29 Dec 1808", name: "Andrew Johnson", occupation: "17th President of the United States" },
    { date: "30 Dec 1975", name: "Tiger Woods", occupation: "Golfer" },
    { date: "31 Dec 1977", name: "Psy", occupation: "Singer, Songwriter" }
];
if (output === "Last Period") {
    document.querySelector('.date').innerHTML = "The first date of your last period";
}



dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const pad = document.querySelector('.pad');
            const second = document.querySelector('.second');
            const ultrasound = document.querySelector('.ultrasound');
            selected.innerText = option.innerText;
            output = document.querySelector('.firstSel').innerText;
            output2 = document.querySelector('.secondSel').innerText;
            output3 = document.querySelector('.thirdSel').innerText;
            output4 = document.querySelector('.fourthSel').innerText;
            if(output==="Conception Date") {
                pad.classList.add('hidden');
                second.classList.add('hidden');
                ultrasound.classList.add('hidden');
                document.querySelector('.date').innerHTML = "Conception Date";
            }
            else if (output==="Last Period") {
                pad.classList.remove('hidden');
                second.classList.remove('hidden');
                ultrasound.classList.add('hidden');
                document.querySelector('.date').innerHTML = "The first date of your last period";
            }
            else if (output==="Ultrasound Date") {
                pad.classList.add('hidden');
                second.classList.add('hidden');
                document.querySelector('.date').innerHTML = "Date of Ultrasound";
                ultrasound.classList.remove('hidden');
            }
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                if(option.innerHTML === selected.innerHTML) {
                    option.classList.add('active');
                }
                else {
                    option.classList.remove('active');
                }
            });
        });
    });
})


$( function() {
    $( "#datepicker" ).datepicker({
        maxDate: new Date()
    });

});

const submit = document.querySelector('.submit');
Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
submit.addEventListener('click', () => {
    if (!(document.querySelector('.calendar').value === "Select a date")) {
        const val = Number(output2.substring(0,2));
        var finalDate;
        var newDate;
        if(output==="Last Period") {
            finalDate = new Date(document.querySelector('.calendar').value).addDays(252 + val);
            newDate = String(finalDate).substring(3, 15);
        }
        else if(output==="Ultrasound Date") {
            finalDate = new Date(document.querySelector('.calendar').value).addDays(((40 - Number(output3))*7) - Number(output4) + 1);
            newDate = String(finalDate).substring(3, 15);
        }
        else {
            finalDate = new Date(document.querySelector('.calendar').value).addDays(266);
            newDate = String(finalDate).substring(3, 15);
        }
        const currDate = new Date();
        const Difference_In_Time = finalDate.getTime() - currDate.getTime();
        const Difference_In_Days = 280 - (Difference_In_Time / (1000 * 3600 * 24));
        var firstTrim;
        var secondTrim;
        var thirdTrim;
        if (Difference_In_Days < 12*7) {
            firstTrim = (Difference_In_Days / (12*7)) * 100;
        }
        else if (Difference_In_Days > 12*7 && Difference_In_Days < 27*7) {
            firstTrim = 100;
            secondTrim = ((Difference_In_Days - 12*7)/(15*7))*100;
        }
        else {
            firstTrim = 100;
            secondTrim = 100;
            thirdTrim = ((Difference_In_Days - 27*7)/(13*7))*100;
            if (thirdTrim > 100) {
                thirdTrim = 100;
            }
        }
        var percentage = Math.round((Difference_In_Days/(40*7))*100);
        if (percentage > 100) {
            percentage = 100;
        }
        document.querySelector('.calculator').classList.toggle('hidden');
        document.querySelector('.generated').classList.toggle('hidden');
        document.querySelector('.celebrity').classList.toggle('hidden');
        document.querySelector('.zodiac').classList.toggle('hidden');
        document.querySelector('.heading').classList.toggle('hidden');
        document.querySelector('.heading2').classList.toggle('hidden');
        document.querySelector('.progress').classList.toggle('hidden');
        document.querySelector('.new-date').classList.toggle('hidden');
        document.querySelector('.recalculate').classList.toggle('hidden');
        document.querySelector('.percentage').classList.toggle('hidden');
        document.querySelector('.show').innerHTML = "Your estimated due date is" + newDate;
        document.querySelector('.date-number').innerHTML = newDate.substring(5, 7);
        document.querySelector('.date-day').innerHTML = newDate.substring(0, 4);
        document.querySelector('.date-year').innerHTML = newDate.substring(7,12);
        document.querySelector('.date-number-small').innerHTML = newDate.substring(5, 7);
        document.querySelector('.date-day-small').innerHTML = newDate.substring(0, 4);
        document.querySelector('.date-year-small').innerHTML = newDate.substring(7,12);
        document.querySelector('.percentage').innerHTML = "Congratulations! You are " + percentage + "% of the way through your pregnancy.";
        document.querySelector('.bar-value').style.animation = "inc 2s ease-in-out";
        document.querySelector('.bar-value').style.width = firstTrim + "%";
        setTimeout(function () {
            document.querySelector('.sec-trim .bar-value').style.animation = "inc 2s ease-in-out";
            document.querySelector('.sec-trim .bar-value').style.width = secondTrim + "%";
        }, 1400);
        setTimeout(function () {
            document.querySelector('.third-trim .bar-value').style.animation = "inc 2s ease-in-out";
            document.querySelector('.third-trim .bar-value').style.width = thirdTrim + "%";
        }, 2800);
    }
    else {
        document.querySelector('.choose-date').classList.remove('hidden');
    }

    const findSign = (date) => {
        const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
        const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
        let month = date.getMonth();
        let day = date.getDate();
        if(month == 0 && day <= 20){
            month = 11;
        }else if(day < days[month]){
            month--;
        }
        return signs[month];
    };

    document.querySelector('.zodiac').innerHTML = "Your baby will be a " + findSign(finalDate) + ".";

    for (let i = 0; i < indianCelebrities.length; i++) {
        if (indianCelebrities[i]["date"].substring(0, 6) === newDate.substring(5, 7) + newDate.substring(0, 4)) {
            document.querySelector('.celebrity').innerHTML = indianCelebrities[i]["name"] + " (" + indianCelebrities[i]["occupation"] + ") was born on " + indianCelebrities[i]["date"];
            break;
        }
    }
});

document.querySelector('.recalculate').addEventListener('click', () => {
    document.querySelector('.calculator').classList.toggle('hidden');
    document.querySelector('.generated').classList.toggle('hidden');
    document.querySelector('.celebrity').classList.toggle('hidden');
    document.querySelector('.zodiac').classList.toggle('hidden');
    document.querySelector('.heading').classList.toggle('hidden');
    document.querySelector('.heading2').classList.toggle('hidden');
    document.querySelector('.progress').classList.toggle('hidden');
    document.querySelector('.new-date').classList.toggle('hidden');
    document.querySelector('.recalculate').classList.toggle('hidden');
    document.querySelector('.percentage').classList.toggle('hidden');
    document.querySelector('.choose-date').classList.add('hidden');
    document.querySelector('.bar-value').style.animation = "none";
    document.querySelector('.bar-value').style.width = "0";
    document.querySelector('.sec-trim .bar-value').style.animation = "none";
    document.querySelector('.sec-trim .bar-value').style.width = "0";
    document.querySelector('.third-trim .bar-value').style.animation = "none";
    document.querySelector('.third-trim .bar-value').style.width = "0";
});
