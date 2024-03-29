<?php

namespace App\View\Components;

use App\Patron;
use Illuminate\View\Component;

class PaymentPatronData extends Component
{
    public $person;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(Patron $person)
    {
        $this->person = $person;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.payment-patron-data');
    }
}
