import styles from './App.module.css';
import { useState } from 'react';

const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']


function App() {

	const [operand1, setOperand1] = useState('0')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')
	const [result, setResult] = useState(false)
	let displayingValues = operand1 + operator + operand2

	const clickButton = (item) => {
		if (operand1 === '0') {
			setOperand1(item)
		} else if (operator) {
			setOperand2((pastMeaning) => pastMeaning + item)
		} else {
			setOperand1((pastMeaning) => pastMeaning + item)
		}
	}

	const clickOnTheSigns = (op) => {
		switch (op) {
			case '+':
				setOperator('+')
				setResult(false)
				break
			case '-':
				setOperator('-')
				setResult(false)
				break
			case '*':
				setOperator('*')
				setResult(false)
				break
			case 'C':
				setOperand1('0')
				setOperand2('')
				setOperator('')
				setResult(false)
				break
			default:
				break
		}
	}

	const finalValue = () => {
		switch (operator) {
			case '+':
				setOperand1(Number(operand1) + Number(operand2))
				setOperand2('')
				setOperator('')
				setResult(true)
				break
			case '-':
				setOperand1(Number(operand1) - Number(operand2))
				setOperand2('')
				setOperator('')
				setResult(true)
				break
			case '*':
				setOperand1(Number(operand1) * Number(operand2))
				setOperand2('')
				setOperator('')
				setResult(true)
				break
			default:
				break
		}
	}






	return (
		<div className={styles.calculator}>
			<input className={`${styles.input} ${result ? styles.result : ''}`} value={displayingValues} />
			<div className={styles.meanings}>{NUMS.map((item, index) =>
				<button className={styles.button} onClick={() => clickButton(item)} key={index}>{item}</button>)}
				<button className={styles.button} onClick={() => clickOnTheSigns('-')}>-</button>
				<button className={styles.button} onClick={() => clickOnTheSigns('+')}>+</button>
				<button className={styles.button} onClick={() => clickOnTheSigns('*')}>*</button>
				<button className={styles.button} onClick={finalValue}>=</button>
				<button className={styles.button} onClick={() => clickOnTheSigns('C')}>C</button>
			</div>
		</div>
	)

}

export default App;
