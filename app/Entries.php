<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entries extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'entries';

    public function user()
    {
        return $this->hasOne('App\User');
    }
}
