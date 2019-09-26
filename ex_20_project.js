/**
 * La aplicación debe escribir una ficha con el nombre completo
 * del estudiante, una línea de separación y a continuación la
 * nota media de dos exámenes
 * 
 * 
 *       ************************************
 *       * <nombre> <apellido1> <apellido2> *
 *       *                                  *
 *       *               8.51               *
 *       *            (APROBADO)            *
 *       ************************************
 *
 *  - NUEVO REQUISITO: usar let y const donde proceda
 * 
 */
const PASS_NOTE = 5;
const LATERAL_WHITESPACES = 2;
const NUMBER_OF_DECIMALS = 2;

const nombre = 'Andres';
const apellido1 = 'Estevez';
const apellido2  = 'Costas';

const grades = [7.9, 9.9, 1, 7, 1, 1, 1];

const full_name = `${nombre} ${apellido1} ${apellido2}`;
const line_size = full_name.length + LATERAL_WHITESPACES;

// first and last lines
const header = '*'.repeat(full_name.length + LATERAL_WHITESPACES * 2);
const footer = header;

// space in between first and last asterisk of middle line
const blank_space = ' '.repeat(full_name.length + LATERAL_WHITESPACES);

// calcular nota media
let sum_grades = 0;

for (let grade of grades) {
    sum_grades = sum_grades + grade;
}

const average_grade = sum_grades / grades.length;

const average_grade_fixed_sized = average_grade.toFixed(NUMBER_OF_DECIMALS);

// space before and after average grade
const blank_prefix = ' '.repeat((line_size - average_grade_fixed_sized.length)/2);
const blank_suffix = ' '.repeat(blank_space.length - blank_prefix.length - average_grade_fixed_sized.length);

let grade;

if (average_grade > PASS_NOTE) {
    grade = '(APROBADO)';
} else {
    grade = '(SUSPENSO)';
}

// space before and after grade summary
const blank_prefix_summary = ' '.repeat(line_size/2 - grade.length/2);
const blank_suffix_summary = ' '.repeat(blank_space.length - blank_prefix_summary.length - grade.length);

console.log(header);
console.log(`* ${full_name} *`);
console.log(`*${blank_space}*`);
console.log(`*${blank_prefix}${average_grade_fixed_sized}${blank_suffix}*`);
console.log(`*${blank_prefix_summary}${grade}${blank_suffix_summary}*`);
console.log(footer);
