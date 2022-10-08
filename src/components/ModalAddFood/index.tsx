import { useEffect, useRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';

interface FoodProps {
  id: number
  image: string
  name: string
  price: string
  description: string
  available: boolean
}


interface ModalProps {
  isOpen: boolean
  handleAddFood: (data: FoodProps) => void
  setIsOpen: () => void
}

export default function ModalAddFood({ isOpen, handleAddFood, setIsOpen }: ModalProps) {
  const formRef = useRef(null)
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    if (isOpen !== modalStatus) {
      setModalStatus(isOpen)
    }
  }, [isOpen, modalStatus])


  const handleSubmit = async (data: FoodProps) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
