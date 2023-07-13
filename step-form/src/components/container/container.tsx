import { Etapas } from '../etapas/etapas'
import { Form } from '../form/formContainer/form'
import styles from './styles.module.scss'
export default async function Caixa() {
    return (
        <main className={styles.Container}>
            <Etapas />
            <Form />
        </main>
    )
}