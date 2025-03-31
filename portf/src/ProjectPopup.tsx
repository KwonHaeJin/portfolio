import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import Close from "./images/close.png";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  imgsrc?: string;
}

const Projectpopup = ({ isOpen, onClose, children, title, imgsrc }: ProjectModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="w-full h-[90vh] flex flex-col p-6 overflow-y-auto rounded-2xl bg-white shadow-xl justify-center items-center">
            <button
                  type="button"
                  className="pl-[76vw] xl:pl-[93vw]"
                  onClick={onClose}
                  
                >
                    <img src={Close} className='w-4 h-4'/>
                </button>
              <Dialog.Title className="flex items-center justify-center rounded-xl text-2xl bg-orange-500 text-white font-empha w-[60vw] h-9 mb-2 xl:text-xl xl:w-52 xl:h-9 xl:mb-4">
                {title}
              </Dialog.Title>
              <div className="overflow-y-auto">
              {imgsrc && (
                <img src={imgsrc} className='w-[75vw] h-[16vh]'/>
              )}
              <div className="w-full break-words">{children}</div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Projectpopup;

