import { useEffect, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div class="mx-auto mt-8 text-oscuro">
            <div class="flex flex-row justify-center w-full">
                <div className="mr-10">
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle1" class="toggle hidden" />
                        <label class="title block font-bold  cursor-pointer" for="toggle1">
                            When the musics over turn off the light?
                        </label>
                        <div class="content overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle2" class="toggle hidden" />
                        <label class="title block font-bol  cursor-pointer" for="toggle2">
                            What is the best way to collect NFT?
                        </label>
                        <div class="content  overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle3" class="toggle hidden" />
                        <label class="title block font-bold  cursor-pointer" for="toggle3">
                            Why NFT Trading is so popular?
                        </label>
                        <div class="content overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle3" class="toggle hidden" />
                        <label class="title block font-bold  cursor-pointer" for="toggle3">
                            How do you trade on Montono easily?
                        </label>
                        <div class="content overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle1" class="toggle hidden" />
                        <label class="title block font-bold  cursor-pointer" for="toggle1">
                            When the musics over turn off the light?
                        </label>
                        <div class="content overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle3" class="toggle hidden" />
                        <label class="title block font-bold  cursor-pointer" for="toggle3">
                            What is the best way to collect NFT?
                        </label>
                        <div class="content overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle2" class="toggle hidden" />
                        <label class="title block font-bol  cursor-pointer" for="toggle2">
                            Why NFT Trading is so popular?
                        </label>
                        <div class="content  overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <input type="checkbox" id="toggle3" class="toggle hidden" />
                        <label class="title block font-bold  cursor-pointer" for="toggle3">
                            How do you trade on Montono easily?
                        </label>
                        <div class="content overflow-hidden">
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQ;