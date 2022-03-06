<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Uasoft\Badaso\Theme\LMSTheme\Commands\LMSThemeSetup;
use Uasoft\Badaso\Theme\LMSTheme\Facades\LMSTheme as FacadesLMSTheme;
use Uasoft\Badaso\Theme\LMSTheme\LMSTheme;


class LMSThemeProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('LMSTheme', FacadesLMSTheme::class);

        $this->app->singleton('badaso-lms-theme', function () {
            return new LMSTheme();
        });

        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'badaso-lms');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'lms-theme');
        $this->loadRoutesFrom(__DIR__.'/../Routes/web.php');

        $this->publishes([
            __DIR__.'/../Seeder'                       => database_path('seeders/Badaso/LMSTheme'),
            __DIR__.'/../Config/badaso-lms-theme.php' => config_path('badaso-lms-theme.php'),
        ], 'BadasoLMSTheme');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/uasoft-indonesia/lms-theme'),
        ], 'BadasoLMSThemeViews');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerConsoleCommands();
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands(LMSThemeSetup::class);
    }
}
