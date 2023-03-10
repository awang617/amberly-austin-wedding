import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {  XMarkIcon } from '@heroicons/react/24/outline'

function WeddingPartyModal(props) {
    const [mouseoverText, setMouseOverText] = useState("");
    const [altText, setAltText] = useState("");

    const cancelButtonRef = useRef(null);

    useEffect(() => {
        setMouseOverText(props.modalDetails.name + "'s picture");
        setAltText("This is " + props.modalDetails.name);
    }, [props])

    return (
        <Transition.Root show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setOpen}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:m-8 w-full md:w-8/12 lg:w-5/12">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="items-start">
                            <div className="sm:mt-3 text-center md:mt-0 sm:text-left">
                                <div className="flex justify-end">
                                    <button type="button" className="focus:outline-none focus:shadow-none" ref={cancelButtonRef}>
                                        <XMarkIcon className="h-6 w-6 link" onClick={props.closeModal}/>
                                    </button>
                                </div>
                                <Dialog.Title as="h3" className="font-abhaya text-center my-0 sm:mt-2">
                                    {props.modalDetails.name}
                                </Dialog.Title>
                                <h4 className="header-text mt-0">{props.modalDetails.role}</h4>
                                {props.modalDetails.image ?
                                    <img className="rounded-full w-full md:w-2/3 lg:w-7/12 mx-auto" src={props.modalDetails.image} title={mouseoverText} alt={altText}/>
                                    : null
                                }
                                <div className="mt-2 text-justify" dangerouslySetInnerHTML={{__html: props.modalDetails.bio}}></div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="btn secondary no-hover-btn-secondary"
                                onClick={props.closeModal}>
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}

export default WeddingPartyModal;
