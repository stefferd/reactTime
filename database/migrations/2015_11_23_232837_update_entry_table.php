<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateEntryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('entries', function ($table) {
            $table->renameColumn('customer', 'customer_id');
            $table->renameColumn('project', 'project_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('entries', function ($table) {
            $table->renameColumn('customer_id', 'customer');
            $table->renameColumn('project_id', 'project');
        });
    }
}
